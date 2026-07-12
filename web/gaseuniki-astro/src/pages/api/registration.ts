import type { APIRoute } from 'astro';
import { saveRegistrationSubmission } from '../../lib/form-submission';
import { RecaptchaError, verifyRecaptchaToken } from '../../lib/recaptcha';
import { checkRateLimit } from '../../lib/rate-limit';
import { isValidEmail, isValidGreekPhone } from '../../lib/validation';

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
    recaptchaToken?: string;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Μη έγκυρο αίτημα.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!checkRateLimit(`registration:${clientIp}`, 5, 60_000)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Πολλές προσπάθειες. Δοκιμάστε ξανά σε λίγο.' }),
      {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  try {
    await verifyRecaptchaToken(body.recaptchaToken);
  } catch (error) {
    const messageText =
      error instanceof RecaptchaError
        ? error.message
        : error instanceof Error
          ? error.message
          : 'Η επαλήθευση reCAPTCHA απέτυχε.';
    const status = error instanceof RecaptchaError ? 400 : 500;
    return new Response(JSON.stringify({ success: false, error: messageText }), {
      status,
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
  const guardianEmail = body.guardianEmail?.trim();

  if (!athleteName || !birthDate || !guardianName || !guardianPhone) {
    return new Response(JSON.stringify({ success: false, error: 'Συμπληρώστε όλα τα υποχρεωτικά πεδία.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!isValidGreekPhone(guardianPhone)) {
    return new Response(JSON.stringify({ success: false, error: 'Μη έγκυρος αριθμός τηλεφώνου.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (guardianEmail && !isValidEmail(guardianEmail)) {
    return new Response(JSON.stringify({ success: false, error: 'Μη έγκυρη διεύθυνση email.' }), {
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
      guardianEmail: guardianEmail || undefined,
      sportInterest: body.sportInterest ?? '',
      previousExperience: body.previousExperience ?? '',
      notes: body.notes?.trim() || undefined,
      privacyAccepted: true,
    });
  } catch (error) {
    console.error('[api/registration] saveRegistrationSubmission failed:', error);
    return new Response(JSON.stringify({ success: false, error: 'Η αποστολή απέτυχε. Δοκιμάστε ξανά.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
