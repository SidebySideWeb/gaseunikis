import { useEffect, useId, useRef, useState } from 'react';
import type { NavLink } from '../lib/types';

export interface NavMobileProps {
  links: NavLink[];
  ctaLabel: string;
  ctaUrl: string;
  currentPath: string;
  clubName: string;
}

function isActivePath(currentPath: string, url: string): boolean {
  if (url === '/') return currentPath === '/';
  return currentPath === url || currentPath.startsWith(`${url}/`);
}

export default function NavMobile({
  links,
  ctaLabel,
  ctaUrl,
  currentPath,
  clubName,
}: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    toggleRef.current?.focus();
  }

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-primary/5"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
        onClick={handleToggle}
      >
        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-sm"
          role="presentation"
          onClick={closeMenu}
        />
      )}

      <div
        id={menuId}
        className={`fixed inset-x-0 top-20 z-50 border-b border-outline-variant/30 bg-surface-container-lowest px-gutter py-8 shadow-card transition-all duration-300 md:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-4 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <p className="mb-6 font-display text-label-caps uppercase tracking-widest text-primary">
          {clubName}
        </p>
        <ul className="flex flex-col gap-4">
          {links.map((link, index) => {
            const active = isActivePath(currentPath, link.url);
            return (
              <li key={link.url}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.url}
                  className={`block font-display text-headline-md transition-colors ${
                    active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                  }`}
                  aria-current={active ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={ctaUrl}
          className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-display text-label-md text-on-primary transition-all duration-200 hover:bg-primary-light active:scale-95"
          onClick={closeMenu}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
