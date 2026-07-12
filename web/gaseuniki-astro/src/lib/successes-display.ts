import type { Achievement } from '../types';
import { resolveImageUrl } from './image';
import { achievementFallbacks } from './stitch-images';
import { defaultAchievements } from './fallbacks';

export type AchievementDisplay = Achievement & { imageUrl: string };

export function buildAchievementDisplayList(achievements: Achievement[] | null | undefined): AchievementDisplay[] {
  const source = achievements?.length ? achievements : defaultAchievements;
  return source.map((item, index) => ({
    ...item,
    imageUrl: resolveImageUrl(item.image, achievementFallbacks[index % achievementFallbacks.length]),
  }));
}

export function getLcpAchievementImage(items: AchievementDisplay[]) {
  const first = items[0];
  return first?.imageUrl ? { src: first.imageUrl } : undefined;
}
