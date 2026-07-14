import type { Achievement, NewsItem } from './types';

export function resolveHomeSuccesses(
  selected: Achievement[] | null | undefined,
  featured: Achievement[],
  latest: Achievement[],
  defaults: Achievement[],
): Achievement[] {
  const curated = (selected ?? []).filter((item): item is Achievement => Boolean(item?._id));
  const featuredClean = featured.filter((item): item is Achievement => Boolean(item?._id));
  const latestClean = latest.filter((item): item is Achievement => Boolean(item?._id));

  // Full manual curation in Studio (3+ picks) overrides automatic feeds.
  if (curated.length >= 3) return curated.slice(0, 3);

  // Auto: items marked "Προβολή στην Αρχική", newest first.
  if (featuredClean.length > 0) return featuredClean.slice(0, 3);

  // Auto: latest achievements when none are featured.
  if (latestClean.length > 0) return latestClean.slice(0, 3);

  if (curated.length > 0) return curated.slice(0, 3);

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
