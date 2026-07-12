import { createClient } from '@sanity/client';
import { getSanityDataset, getSanityProjectId, SANITY_API_VERSION } from './sanity-config';

const useCdn = import.meta.env.PROD;

export const client = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  apiVersion: SANITY_API_VERSION,
  useCdn,
});

export const writeClient = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  apiVersion: SANITY_API_VERSION,
  useCdn: false,
  token: import.meta.env.SANITY_WRITE_TOKEN,
});
