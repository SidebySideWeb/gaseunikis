import type { APIRoute } from 'astro';
import {
  arePreviewCredentialsValid,
  isPreviewAuthEnabled,
  safeReturnPath,
  setPreviewCookie,
} from '../../lib/preview-auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isPreviewAuthEnabled()) {
    return redirect('/');
  }

  const formData = await request.formData();
  const username = String(formData.get('username') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const returnPath = safeReturnPath(String(formData.get('return') ?? ''));

  if (!arePreviewCredentialsValid(username, password)) {
    const loginUrl = new URL('/preview-login', request.url);
    loginUrl.searchParams.set('return', returnPath);
    loginUrl.searchParams.set('error', '1');
    return redirect(loginUrl.toString());
  }

  setPreviewCookie(cookies);
  return redirect(returnPath);
};
