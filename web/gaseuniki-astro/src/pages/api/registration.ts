import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: { privacyAccepted?: boolean };

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

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
