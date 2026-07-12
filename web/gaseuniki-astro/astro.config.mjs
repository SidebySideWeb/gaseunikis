// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import { SANITY_DATASET, SANITY_PROJECT_ID } from './src/lib/sanity-config.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.gaseuniki.gr',
  // Server-rendered pages: Sanity content updates appear on the next request (no redeploy).
  output: 'server',
  adapter: vercel(),
  build: {
    // Inline CSS into HTML — avoids a render-blocking external stylesheet request (~13 KiB Layout.css).
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/placeholder'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'el',
        locales: {
          el: 'el-GR',
        },
      },
    }),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: true,
    }),
  ],
});
