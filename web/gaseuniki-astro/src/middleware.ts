import { defineMiddleware } from 'astro:middleware';

/** Dynamic pages and server islands — CMS updates within ~60s. */
const PAGE_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=300';
const ISLAND_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=120';
/** Prerendered pages — content baked at deploy. */
const STATIC_PAGE_CACHE_CONTROL = 'public, s-maxage=86400, stale-while-revalidate=604800';

const STATIC_PATHS = new Set(['/', '/syllogos', '/epikoinonia', '/tmimata']);

function isBasicAuthValid(request: Request): boolean {
  const expectedUser = import.meta.env.BASIC_AUTH_USER;
  const expectedPass = import.meta.env.BASIC_AUTH_PASS;

  // Auth disabled when env vars are not configured (remove them in Vercel to go public).
  if (!expectedUser || !expectedPass) {
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
    return username === expectedUser && password === expectedPass;
  } catch {
    return false;
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  if (!isBasicAuthValid(context.request)) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const response = await next();

  if (context.url.pathname.startsWith('/api/')) {
    return response;
  }

  if (context.url.pathname.startsWith('/_server-islands/')) {
    response.headers.set('Cache-Control', ISLAND_CACHE_CONTROL);
    return response;
  }

  const pathname = context.url.pathname.replace(/\/$/, '') || '/';
  const isStaticPage =
    STATIC_PATHS.has(pathname) || pathname.startsWith('/selida/');
  response.headers.set(
    'Cache-Control',
    isStaticPage ? STATIC_PAGE_CACHE_CONTROL : PAGE_CACHE_CONTROL,
  );

  return response;
});
