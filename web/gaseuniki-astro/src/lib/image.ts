import { createImageUrlBuilder } from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from './sanity';
import type { ImageSource } from './types';

const builder = createImageUrlBuilder(client);

export function urlFor(source: ImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export function getImageUrl(
  source: ImageSource,
  options?: { width?: number; height?: number; quality?: number },
): string | undefined {
  if (!source) return undefined;

  let imageBuilder = urlFor(source).auto('format');

  if (options?.width) {
    imageBuilder = imageBuilder.width(options.width);
  }
  if (options?.height) {
    imageBuilder = imageBuilder.height(options.height);
  }
  if (options?.quality) {
    imageBuilder = imageBuilder.quality(options.quality);
  }

  return imageBuilder.url();
}

export function resolveImageUrl(
  source: ImageSource,
  fallback: string,
  options?: { width?: number; height?: number; quality?: number },
): string {
  return getImageUrl(source, options) ?? fallback;
}
