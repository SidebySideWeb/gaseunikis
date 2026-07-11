export const DEFAULT_POSTS_PER_PAGE = 9;

export function getPostsPerPage(value?: number): number {
  if (!value || value < 3) return DEFAULT_POSTS_PER_PAGE;
  return Math.min(value, 24);
}

export function getTotalNewsPages(totalPosts: number, postsPerPage: number): number {
  if (totalPosts <= 0) return 1;
  return Math.ceil(totalPosts / postsPerPage);
}

export function getNewsPageHref(page: number): string {
  if (page <= 1) return '/nea';
  return `/nea/page/${page}`;
}

export function getNewsPageRange(page: number, postsPerPage: number): { start: number; end: number } {
  const start = (page - 1) * postsPerPage;
  return { start, end: start + postsPerPage };
}
