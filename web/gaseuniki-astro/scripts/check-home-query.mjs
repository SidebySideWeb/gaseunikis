import { createClient } from '@sanity/client';
import { homePageQuery } from '../src/lib/queries.ts';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const home = await client.fetch(homePageQuery);
console.log('homePageQuery result keys:', Object.keys(home ?? {}));
console.log('heroHeading:', home?.heroHeading);
console.log('galleryHeading:', home?.galleryHeading);
console.log('galleryImages:', JSON.stringify(home?.galleryImages?.map((g) => ({
  caption: g.caption,
  url: g.image?.asset?.url,
  alt: g.image?.alt,
})), null, 2));
