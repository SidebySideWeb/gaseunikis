import type { NavLink, SiteSettings } from './types';

/** Main nav links — registration is handled by the separate CTA button. */
export const defaultNavLinks: NavLink[] = [
  { label: 'Αρχική', url: '/' },
  { label: 'Ο Σύλλογος', url: '/syllogos' },
  { label: 'Νέα', url: '/nea' },
  { label: 'Τμήματα', url: '/tmimata' },
  { label: 'Επιτυχίες', url: '/epitychies' },
  { label: 'Επικοινωνία', url: '/epikoinonia' },
];

export const defaultNavCta: NavLink = {
  label: 'Εγγραφή',
  url: '/egrafes',
};

function isValidNavLink(link: NavLink | undefined): link is NavLink {
  return Boolean(link?.label?.trim() && link?.url?.trim());
}

export function resolveNavLinks(settings?: SiteSettings | null): NavLink[] {
  const fromSanity = (settings?.navLinks ?? []).filter(isValidNavLink);
  if (fromSanity.length > 0) return fromSanity;
  return defaultNavLinks;
}

export function resolveNavCta(settings?: SiteSettings | null): NavLink {
  return {
    label: settings?.navCtaLabel?.trim() || defaultNavCta.label,
    url: settings?.navCtaUrl?.trim() || defaultNavCta.url,
  };
}

/** Drop nav items that duplicate the registration CTA (same URL). */
export function dedupeNavCtaFromLinks(links: NavLink[], cta: NavLink): NavLink[] {
  return links.filter((link) => link.url !== cta.url);
}
