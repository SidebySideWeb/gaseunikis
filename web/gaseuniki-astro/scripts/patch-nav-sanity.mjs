import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, '../.env') });

const projectId = process.env.SANITY_PROJECT_ID ?? '3cdkfsee';
const dataset = process.env.SANITY_DATASET ?? 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.error('SANITY_WRITE_TOKEN is required');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const navLinks = [
  { _type: 'navLink', _key: 'nav-home', label: 'Αρχική', url: '/' },
  { _type: 'navLink', _key: 'nav-about', label: 'Ο Σύλλογος', url: '/syllogos' },
  { _type: 'navLink', _key: 'nav-news', label: 'Νέα', url: '/nea' },
  { _type: 'navLink', _key: 'nav-sections', label: 'Τμήματα', url: '/tmimata' },
  { _type: 'navLink', _key: 'nav-successes', label: 'Επιτυχίες', url: '/epitychies' },
  { _type: 'navLink', _key: 'nav-contact', label: 'Επικοινωνία', url: '/epikoinonia' },
];

await client
  .patch('siteSettings')
  .set({
    navLinks,
    navCtaLabel: 'Εγγραφή',
    navCtaUrl: '/egrafes',
  })
  .commit();

console.log('Updated siteSettings navLinks and CTA in Sanity.');
