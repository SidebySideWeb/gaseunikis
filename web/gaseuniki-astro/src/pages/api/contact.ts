import type { APIRoute } from 'astro';
import { saveContactSubmission } from '../../lib/form-submission';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: {
    fullName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Μη έγκυρο αίτημα.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const fullName = body.fullName?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!fullName || !email || !phone || !subject || !message) {
    return new Response(JSON.stringify({ success: false, error: 'Συμπληρώστε όλα τα υποχρεωτικά πεδία.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await saveContactSubmission({ fullName, email, phone, subject, message });
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
