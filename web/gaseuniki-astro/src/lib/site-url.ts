export function resolveSiteOrigin(site: URL | string | undefined): string {
  if (site instanceof URL) {
    return site.origin;
  }
  if (typeof site === 'string' && site.trim()) {
    return site.replace(/\/$/, '');
  }
  return 'https://gas-eyniki.gr';
}

export function buildAbsoluteUrl(path: string, siteOrigin: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteOrigin}${normalizedPath}`;
}
