import { defineMiddleware } from 'astro:middleware';

/** Dynamic pages and server islands — CMS updates within ~60s. */
const PAGE_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=300';
const ISLAND_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=120';
/** Prerendered pages — content baked at deploy. */
const STATIC_PAGE_CACHE_CONTROL = 'public, s-maxage=86400, stale-while-revalidate=604800';

const STATIC_PATHS = new Set(['/', '/syllogos', '/epikoinonia', '/tmimata']);

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.startsWith('/api/')) {
    return response;
  }

  if (context.url.pathname.startsWith('/_server-islands/')) {
    response.headers.set('Cache-Control', ISLAND_CACHE_CONTROL);
    return response;
  }

  const pathname = context.url.pathname.replace(/\/$/, '') || '/';
  response.headers.set(
    'Cache-Control',
    STATIC_PATHS.has(pathname) ? STATIC_PAGE_CACHE_CONTROL : PAGE_CACHE_CONTROL,
  );

  return response;
});
