import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '3cdkfsee',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const settings = await client.fetch(`*[_type=="siteSettings"][0]{
  navLinks[] { label, url },
  navCtaLabel,
  navCtaUrl,
  footerUsefulLinks[] { label, url }
}`);

console.log('Sanity navLinks:', JSON.stringify(settings?.navLinks, null, 2));
console.log('CTA:', settings?.navCtaLabel, settings?.navCtaUrl);
console.log('Footer useful:', JSON.stringify(settings?.footerUsefulLinks, null, 2));
