import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const docs = await client.fetch(
  `*[_type in ["siteSettings","homePage","aboutPage","sectionsPage","newsIndexPage","registrationPage","contactPage","newsPost","epitychies"]]{ _id, _type, _updatedAt } | order(_type)`,
);

console.log('=== Documents in Sanity ===');
console.log(JSON.stringify(docs, null, 2));

const home = await client.fetch(`*[_type=="homePage"][0]{
  _id,
  heroHeading,
  galleryHeading,
  "galleryCount": count(galleryImages),
  "galleryWithImages": count(galleryImages[defined(image.asset)]),
  "hasHeroImage": defined(heroImage.asset),
  "whyItemsCount": count(whyItems),
  sponsors
}`);

console.log('\n=== homePage ===');
console.log(JSON.stringify(home, null, 2));

const settings = await client.fetch(`*[_type=="siteSettings"][0]{ _id, clubName, "navCount": count(navLinks) }`);
console.log('\n=== siteSettings ===');
console.log(JSON.stringify(settings, null, 2));
