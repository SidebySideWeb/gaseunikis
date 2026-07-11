/** Public Sanity project config — safe to commit (not a secret). */
export const SANITY_PROJECT_ID = '3cdkfsee';
export const SANITY_DATASET = 'production';
export const SANITY_API_VERSION = '2024-01-01';
export const SANITY_STUDIO_URL = 'https://gaseuniki.sanity.studio/';

export function getSanityProjectId(): string {
  return import.meta.env.SANITY_PROJECT_ID || SANITY_PROJECT_ID;
}

export function getSanityDataset(): string {
  return import.meta.env.SANITY_DATASET || SANITY_DATASET;
}

export function getSanityStudioUrl(): string {
  const url = import.meta.env.SANITY_STUDIO_URL || SANITY_STUDIO_URL;
  return url.endsWith('/') ? url : `${url}/`;
}
