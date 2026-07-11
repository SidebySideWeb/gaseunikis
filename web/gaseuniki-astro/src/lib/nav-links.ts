import type { NavLink } from './types';

export const defaultNavLinks: NavLink[] = [
  { label: 'Αρχική', url: '/' },
  { label: 'Ο Σύλλογος', url: '/syllogos' },
  { label: 'Νέα', url: '/nea' },
  { label: 'Τμήματα', url: '/tmimata' },
  { label: 'Επιτυχίες', url: '/epitychies' },
  { label: 'Εγγραφές', url: '/egrafes' },
  { label: 'Επικοινωνία', url: '/epikoinonia' },
];

export const defaultNavCta: NavLink = {
  label: 'Εγγραφή',
  url: '/egrafes',
};
