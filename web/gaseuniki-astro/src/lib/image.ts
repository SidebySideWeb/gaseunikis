import { createImageUrlBuilder } from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from './sanity';
import type { ImageSource } from './types';

const builder = createImageUrlBuilder(client);

export interface ImageUrlOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
}

export interface ResponsiveImageOptions extends ImageUrlOptions {
  widths?: readonly number[];
  sizes?: string;
}

export interface ImageDelivery {
  src: string;
  srcSet?: string;
  sizes?: string;
}

export const IMAGE_PRESETS = {
  logoNav: { width: 124, height: 124, quality: 85 },
  logoFooter: { width: 104, height: 104, quality: 85 },
  og: { width: 1200, quality: 80 },
  card: {
    widths: [384, 576, 768] as const,
    sizes: '(min-width: 768px) 33vw, 100vw',
    quality: 80,
  },
  gallery: {
    widths: [400, 600, 900] as const,
    sizes: '(min-width: 768px) 33vw, 100vw',
    quality: 80,
  },
  halfWidth: {
    widths: [480, 640, 960] as const,
    sizes: '(min-width: 768px) 50vw, 100vw',
    quality: 80,
  },
  hero: {
    widths: [640, 960, 1280, 1600] as const,
    sizes: '100vw',
    quality: 80,
  },
} as const;

export function urlFor(source: ImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export function getImageUrl(source: ImageSource, options?: ImageUrlOptions): string | undefined {
  if (!source) return undefined;

  let imageBuilder = urlFor(source).auto('format').fit(options?.fit ?? 'max');

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

export function getImageSrcSet(
  source: ImageSource,
  widths: readonly number[],
  options?: Pick<ImageUrlOptions, 'quality' | 'fit' | 'height'>,
): string | undefined {
  if (!source || !widths.length) return undefined;

  return widths
    .map((width) => {
      const url = getImageUrl(source, { ...options, width });
      return url ? `${url} ${width}w` : null;
    })
    .filter(Boolean)
    .join(', ');
}

export function resolveResponsiveImage(
  source: ImageSource,
  fallback: string,
  options: ResponsiveImageOptions = {},
): ImageDelivery {
  const quality = options.quality ?? 80;

  if (source) {
    if (options.widths?.length) {
      const largest = options.widths[options.widths.length - 1]!;
      return {
        src: getImageUrl(source, { width: largest, height: options.height, quality, fit: options.fit }) ?? fallback,
        srcSet: getImageSrcSet(source, options.widths, {
          quality,
          fit: options.fit,
          height: options.height,
        }),
        sizes: options.sizes,
      };
    }

    return {
      src:
        getImageUrl(source, {
          width: options.width,
          height: options.height,
          quality,
          fit: options.fit,
        }) ?? fallback,
    };
  }

  return { src: fallback };
}

export function resolveImageUrl(
  source: ImageSource,
  fallback: string,
  options?: ImageUrlOptions,
): string {
  return resolveResponsiveImage(source, fallback, options).src;
}

export function resolvePresetImage(
  source: ImageSource,
  fallback: string,
  preset: keyof typeof IMAGE_PRESETS,
): ImageDelivery {
  return resolveResponsiveImage(source, fallback, IMAGE_PRESETS[preset]);
}

/** Preload only when URL is unambiguous — responsive srcset preloads often mismatch DPR/viewport. */
export function getLcpPreloadHref(delivery: ImageDelivery): string | undefined {
  return delivery.srcSet ? undefined : delivery.src;
}
