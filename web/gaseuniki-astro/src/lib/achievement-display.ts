import type { Achievement, SanityImage } from './types';
import type { ImageDelivery } from './image';
import { resolvePresetImage } from './image';
import { achievementFallbacks } from './stitch-images';

export function parseLegacyYearString(year?: string): number[] {
  if (!year) return [];
  const matches = year.match(/\d{4}/g);
  if (!matches) return [];
  return [...new Set(matches.map(Number))].sort((a, b) => b - a);
}

export function resolveAchievementYears(item: Achievement): number[] {
  if (item.years?.length) {
    return [...item.years].sort((a, b) => b - a);
  }
  return parseLegacyYearString(item.year);
}

export function formatAchievementYears(years: number[]): string {
  if (!years.length) return '';
  return years.join(' · ');
}

export function resolveAchievementImageSources(item: Achievement): SanityImage[] {
  const fromGallery = (item.images ?? []).filter((image) => image?.asset);
  if (fromGallery.length > 0) return fromGallery;
  if (item.image?.asset) return [item.image];
  return [];
}

export interface AchievementGalleryImage {
  delivery: ImageDelivery;
  alt: string;
}

export function buildAchievementGalleryImages(
  item: Achievement,
  fallbackIndex: number,
): AchievementGalleryImage[] {
  const sources = resolveAchievementImageSources(item);
  if (!sources.length) {
    const fallback = achievementFallbacks[fallbackIndex % achievementFallbacks.length];
    return [
      {
        delivery: resolvePresetImage(undefined, fallback, 'card'),
        alt: item.title,
      },
    ];
  }

  return sources.map((source, index) => {
    const fallback = achievementFallbacks[(fallbackIndex + index) % achievementFallbacks.length];
    const preset = resolvePresetImage(source, fallback, 'card');
    return {
      delivery: preset,
      alt: source.alt ?? item.title,
    };
  });
}

export function getAchievementCardImageUrl(item: Achievement, fallbackIndex: number): string {
  const gallery = buildAchievementGalleryImages(item, fallbackIndex);
  return gallery[0]?.delivery.src ?? achievementFallbacks[fallbackIndex % achievementFallbacks.length];
}
