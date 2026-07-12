import { writeClient } from './sanity';

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
};

type RegistrationPayload = {
  athleteName: string;
  birthDate: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail?: string;
  sportInterest: string;
  previousExperience: string;
  notes?: string;
  privacyAccepted: boolean;
};

type AdminNotificationPayload =
  | { type: 'contact'; data: ContactPayload }
  | { type: 'registration'; data: RegistrationPayload };

const RESEND_FROM = 'ΓΑΣ Ευνίκη <notifications@gaseuniki.gr>';

function formatContactBody(payload: ContactPayload): string {
  return [
    'Νέα φόρμα επικοινωνίας',
    '',
    `Ονοματεπώνυμο: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Τηλέφωνο: ${payload.phone}`,
    `Θέμα: ${payload.subject}`,
    '',
    'Μήνυμα:',
    payload.message,
  ].join('\n');
}

function formatRegistrationBody(payload: RegistrationPayload): string {
  const lines = [
    'Νέα αίτηση εγγραφής',
    '',
    `Αθλητής/τρια: ${payload.athleteName}`,
    `Ημερομηνία γέννησης: ${payload.birthDate}`,
    `Όνομα κηδεμόνα: ${payload.guardianName}`,
    `Τηλέφωνο κηδεμόνα: ${payload.guardianPhone}`,
  ];

  if (payload.guardianEmail) {
    lines.push(`Email κηδεμόνα: ${payload.guardianEmail}`);
  }

  lines.push(
    `Ενδιαφέρον: ${payload.sportInterest}`,
    `Προηγούμενη εμπειρία: ${payload.previousExperience}`,
  );

  if (payload.notes) {
    lines.push('', 'Σημειώσεις:', payload.notes);
  }

  return lines.join('\n');
}

async function sendAdminNotification(payload: AdminNotificationPayload): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.ADMIN_NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    return;
  }

  const subject =
    payload.type === 'contact'
      ? `[Επικοινωνία] Νέα αίτηση από ${payload.data.fullName}`
      : `[Εγγραφή] Νέα αίτηση για ${payload.data.athleteName}`;

  const text =
    payload.type === 'contact' ? formatContactBody(payload.data) : formatRegistrationBody(payload.data);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [to],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorBody}`);
  }
}

export async function saveContactSubmission(payload: ContactPayload) {
  if (!import.meta.env.SANITY_WRITE_TOKEN) {
    throw new Error('SANITY_WRITE_TOKEN is not configured.');
  }

  const result = await writeClient.create({
    _type: 'formSubmission',
    formType: 'contact',
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject,
    message: payload.message,
    privacyAccepted: payload.privacyAccepted,
    submittedAt: new Date().toISOString(),
    read: false,
    starred: false,
  });

  try {
    await sendAdminNotification({ type: 'contact', data: payload });
  } catch (error) {
    console.error('[form-submission] contact admin notification failed:', error);
  }

  return result;
}

export async function saveRegistrationSubmission(payload: RegistrationPayload) {
  if (!import.meta.env.SANITY_WRITE_TOKEN) {
    throw new Error('SANITY_WRITE_TOKEN is not configured.');
  }

  const result = await writeClient.create({
    _type: 'formSubmission',
    formType: 'registration',
    fullName: payload.guardianName,
    email: payload.guardianEmail,
    phone: payload.guardianPhone,
    athleteName: payload.athleteName,
    birthDate: payload.birthDate,
    guardianName: payload.guardianName,
    guardianPhone: payload.guardianPhone,
    guardianEmail: payload.guardianEmail,
    sportInterest: payload.sportInterest,
    previousExperience: payload.previousExperience,
    notes: payload.notes,
    privacyAccepted: payload.privacyAccepted,
    submittedAt: new Date().toISOString(),
    read: false,
    starred: false,
  });

  try {
    await sendAdminNotification({ type: 'registration', data: payload });
  } catch (error) {
    console.error('[form-submission] registration admin notification failed:', error);
  }

  return result;
}
