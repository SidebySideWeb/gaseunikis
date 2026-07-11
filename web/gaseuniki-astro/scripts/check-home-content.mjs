import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '3cdkfsee',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const home = await client.fetch(`*[_type=="homePage"][0]{
  featuredSuccesses,
  "featuredResolved": featuredSuccesses[]->{ _id, title, athleteName, featured, "slug": slug.current },
  stats
}`);

const news = await client.fetch(`*[_type=="newsPost"] | order(publishedDate desc)[0...3]{
  _id, title, "slug": slug.current, publishedDate, excerpt
}`);

const featured = await client.fetch(`*[_type=="epitychies" && featured == true] | order(year desc)[0...6]{
  _id, title, athleteName, featured, "slug": slug.current
}`);

console.log(JSON.stringify({ home, news, featured }, null, 2));
