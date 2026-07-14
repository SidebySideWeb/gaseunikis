const PREVIEW_AUTH_COOKIE = 'preview_auth';

/** Prevent prerender when preview lock is on so middleware runs on every page. */
export function shouldPrerenderForPreviewAuth(): boolean {
  return !isPreviewAuthEnabled();
}

export function isPreviewAuthEnabled(): boolean {
  return Boolean(import.meta.env.BASIC_AUTH_USER && import.meta.env.BASIC_AUTH_PASS);
}

/** Keep auth redirects and HTML out of CDN caches (Cloudflare + Vercel). */
export function previewAuthResponseHeaders(): HeadersInit {
  return {
    'Cache-Control': 'private, no-store, must-revalidate',
    'CDN-Cache-Control': 'no-store',
    Vary: 'Cookie',
  };
}

export function arePreviewCredentialsValid(username: string, password: string): boolean {
  const expectedUser = import.meta.env.BASIC_AUTH_USER;
  const expectedPass = import.meta.env.BASIC_AUTH_PASS;
  return username === expectedUser && password === expectedPass;
}

export function hasPreviewCookie(cookies: Astro.Cookies): boolean {
  return cookies.get(PREVIEW_AUTH_COOKIE)?.value === '1';
}

export function setPreviewCookie(cookies: Astro.Cookies) {
  cookies.set(PREVIEW_AUTH_COOKIE, '1', {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function isBasicAuthValid(request: Request): boolean {
  if (!isPreviewAuthEnabled()) {
    return true;
  }

  const authorization = request.headers.get('Authorization');
  if (!authorization?.startsWith('Basic ')) {
    return false;
  }

  try {
    const decoded = atob(authorization.slice(6));
    const separatorIndex = decoded.indexOf(':');
    if (separatorIndex === -1) {
      return false;
    }

    const username = decoded.slice(0, separatorIndex);
    const password = decoded.slice(separatorIndex + 1);
    return arePreviewCredentialsValid(username, password);
  } catch {
    return false;
  }
}

/** Static assets must load without auth (e.g. on the login page). */
export function isPublicAssetPath(pathname: string): boolean {
  return (
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/fonts/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/vendor/') ||
    pathname.startsWith('/styles/') ||
    pathname === '/favicon.png'
  );
}

export function isPreviewAuthBypassPath(pathname: string): boolean {
  return (
    pathname === '/preview-login' ||
    pathname === '/api/preview-auth' ||
    pathname.startsWith('/_server-islands/')
  );
}

export function safeReturnPath(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/';
  }
  return value;
}
