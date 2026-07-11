import fs from 'node:fs';

const html = fs.readFileSync('dist/client/index.html', 'utf8');
const navMatch = html.match(/aria-label="Κύρια πλοήγηση"[\s\S]*?<\/nav>/);
if (!navMatch) {
  console.log('Nav not found');
  process.exit(1);
}

const links = [...navMatch[0].matchAll(/href="([^"]+)"[^>]*>([^<]+)</g)];
console.log('Built nav links:');
for (const [, url, label] of links) {
  if (url.startsWith('/') || url === '/') console.log(`  ${label.trim()} -> ${url}`);
}

const ctaMatch = navMatch[0].match(/hidden md:inline-flex[^>]*>([^<]+)</);
console.log('CTA:', ctaMatch?.[1]?.trim() ?? 'not found');
