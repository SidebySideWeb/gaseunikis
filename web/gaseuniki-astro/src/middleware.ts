import { defineMiddleware } from 'astro:middleware';

/** Dynamic pages — CMS updates within ~60s. */
const PAGE_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=300';
const ISLAND_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=120';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const response = await next();

  if (pathname.startsWith('/api/')) {
    return response;
  }

  if (pathname.startsWith('/_server-islands/')) {
    response.headers.set('Cache-Control', ISLAND_CACHE_CONTROL);
    return response;
  }

  response.headers.set('Cache-Control', PAGE_CACHE_CONTROL);
  return response;
});
