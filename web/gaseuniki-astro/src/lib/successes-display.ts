import type { Achievement } from '../types';
import {
  buildAchievementGalleryImages,
  formatAchievementYears,
  getAchievementCardImageUrl,
  resolveAchievementYears,
} from './achievement-display';
import type { AchievementGalleryImage } from './achievement-display';
import { achievementFallbacks } from './stitch-images';
import { defaultAchievements } from './fallbacks';

export type AchievementDisplay = Achievement & {
  imageUrl: string;
  galleryImages: AchievementGalleryImage[];
  displayYears: number[];
  yearsLabel: string;
};

export function buildAchievementDisplayList(achievements: Achievement[] | null | undefined): AchievementDisplay[] {
  const source = achievements?.length ? achievements : defaultAchievements;
  return source.map((item, index) => {
    const displayYears = resolveAchievementYears(item);
    return {
      ...item,
      imageUrl: getAchievementCardImageUrl(item, index),
      galleryImages: buildAchievementGalleryImages(item, index),
      displayYears,
      yearsLabel: formatAchievementYears(displayYears),
    };
  });
}

export function getLcpAchievementImage(items: AchievementDisplay[]) {
  const first = items[0];
  return first?.imageUrl ? { src: first.imageUrl } : undefined;
}

export { achievementFallbacks };
