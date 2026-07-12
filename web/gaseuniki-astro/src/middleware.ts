import { defineMiddleware } from 'astro:middleware';
import {
  hasPreviewCookie,
  isBasicAuthValid,
  isPreviewAuthBypassPath,
  isPreviewAuthEnabled,
  isPublicAssetPath,
  previewAuthResponseHeaders,
  safeReturnPath,
} from './lib/preview-auth';

/** Dynamic pages and server islands — CMS updates within ~60s. */
const PAGE_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=300';
const ISLAND_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=120';
/** Prerendered pages — content baked at deploy. */
const STATIC_PAGE_CACHE_CONTROL = 'public, s-maxage=86400, stale-while-revalidate=604800';

const STATIC_PATHS = new Set(['/', '/syllogos', '/epikoinonia', '/tmimata']);

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  if (isPreviewAuthEnabled()) {
    const allowed =
      isPublicAssetPath(pathname) ||
      isPreviewAuthBypassPath(pathname) ||
      hasPreviewCookie(context.cookies) ||
      isBasicAuthValid(context.request);

    if (!allowed) {
      const hasAuthHeader = context.request.headers.get('Authorization')?.startsWith('Basic ');

      // API clients with a bad Basic Auth header still get a proper 401.
      if (hasAuthHeader) {
        return new Response('Authentication required', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
            'Cache-Control': 'no-store',
          },
        });
      }

      // Browsers on Vercel often ignore WWW-Authenticate — send them to a login form.
      const loginUrl = new URL('/preview-login', context.url);
      loginUrl.searchParams.set('return', safeReturnPath(pathname + context.url.search));
      const response = context.redirect(loginUrl.toString());
      for (const [key, value] of Object.entries(previewAuthResponseHeaders())) {
        response.headers.set(key, value);
      }
      return response;
    }
  }

  const response = await next();

  if (pathname.startsWith('/api/')) {
    return response;
  }

  // With Cloudflare in front, public cache headers on HTML would bypass preview auth at the edge.
  if (isPreviewAuthEnabled() && !isPublicAssetPath(pathname)) {
    response.headers.set('Cache-Control', 'private, no-store, must-revalidate');
    response.headers.set('CDN-Cache-Control', 'no-store');
    return response;
  }

  if (pathname.startsWith('/_server-islands/')) {
    response.headers.set('Cache-Control', ISLAND_CACHE_CONTROL);
    return response;
  }

  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const isStaticPage =
    STATIC_PATHS.has(normalizedPath) || normalizedPath.startsWith('/selida/');
  response.headers.set(
    'Cache-Control',
    isStaticPage ? STATIC_PAGE_CACHE_CONTROL : PAGE_CACHE_CONTROL,
  );

  return response;
});
