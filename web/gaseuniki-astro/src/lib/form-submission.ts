import { writeClient } from './sanity';

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
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

export async function saveContactSubmission(payload: ContactPayload) {
  if (!import.meta.env.SANITY_WRITE_TOKEN) {
    throw new Error('SANITY_WRITE_TOKEN is not configured.');
  }

  return writeClient.create({
    _type: 'formSubmission',
    formType: 'contact',
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject,
    message: payload.message,
    submittedAt: new Date().toISOString(),
    read: false,
    starred: false,
  });
}

export async function saveRegistrationSubmission(payload: RegistrationPayload) {
  if (!import.meta.env.SANITY_WRITE_TOKEN) {
    throw new Error('SANITY_WRITE_TOKEN is not configured.');
  }

  return writeClient.create({
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
}
