import type { APIRoute } from 'astro';
import { saveRegistrationSubmission } from '../../lib/form-submission';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: {
    athleteName?: string;
    birthDate?: string;
    guardianName?: string;
    guardianPhone?: string;
    guardianEmail?: string;
    sportInterest?: string;
    previousExperience?: string;
    notes?: string;
    privacyAccepted?: boolean;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Μη έγκυρο αίτημα.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (body.privacyAccepted !== true) {
    return new Response(
      JSON.stringify({ success: false, error: 'Πρέπει να αποδεχτείτε την επεξεργασία των δεδομένων σας.' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const athleteName = body.athleteName?.trim();
  const birthDate = body.birthDate?.trim();
  const guardianName = body.guardianName?.trim();
  const guardianPhone = body.guardianPhone?.trim();

  if (!athleteName || !birthDate || !guardianName || !guardianPhone) {
    return new Response(JSON.stringify({ success: false, error: 'Συμπληρώστε όλα τα υποχρεωτικά πεδία.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await saveRegistrationSubmission({
      athleteName,
      birthDate,
      guardianName,
      guardianPhone,
      guardianEmail: body.guardianEmail?.trim() || undefined,
      sportInterest: body.sportInterest ?? '',
      previousExperience: body.previousExperience ?? '',
      notes: body.notes?.trim() || undefined,
      privacyAccepted: true,
    });
  } catch (error) {
    const messageText =
      error instanceof Error ? error.message : 'Η αποστολή απέτυχε. Δοκιμάστε ξανά.';
    return new Response(JSON.stringify({ success: false, error: messageText }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
