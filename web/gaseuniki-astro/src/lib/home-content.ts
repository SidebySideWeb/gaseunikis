import type { Achievement, NewsItem } from './types';

export function resolveHomeSuccesses(
  selected: Achievement[] | null | undefined,
  featured: Achievement[],
  defaults: Achievement[],
): Achievement[] {
  const cleaned = (selected ?? []).filter((item): item is Achievement => Boolean(item?._id));
  if (cleaned.length > 0) return cleaned.slice(0, 6);
  if (featured.length > 0) return featured.slice(0, 3);
  return defaults;
}

export function resolveLatestNews(posts: NewsItem[], defaults: NewsItem[]): NewsItem[] {
  const withSlugs = posts.filter((post) => post.slug?.current);
  if (withSlugs.length > 0) return withSlugs.slice(0, 3);
  return defaults;
}

export function achievementUrl(item: Achievement): string | undefined {
  const slug = item.slug?.current;
  return slug ? `/epitychies/${slug}` : undefined;
}

export function newsUrl(post: NewsItem): string {
  return post.slug?.current ? `/nea/${post.slug.current}` : '/nea';
}

export function formatNewsDate(value?: string): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' });
}
