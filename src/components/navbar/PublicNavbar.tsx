import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ASSETS, NAV_LINKS } from '../../constants/content';
import { Button } from '../ui/Button';

const PublicNavbar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  // Hash links (e.g. /services#pricing) are anchor scrolls, not page routes —
  // never mark them as the active page.
  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    return href === '/'
      ? router.pathname === '/'
      : router.pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? 'border-white/[0.08] bg-primary-900/95 backdrop-blur-[14px]'
          : 'border-transparent bg-primary-900'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={ASSETS.logo.whiteIconBg}
            alt="Zylen"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-montserrat text-xl font-extrabold tracking-tight text-white">
              ZYLEN
            </span>
            <span className="mt-1 font-montserrat text-[0.5625rem] font-medium tracking-[0.12em] text-white/55">
              E-INVOICE INTEGRATION SERVICE
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive(link.href)
                  ? 'bg-white/10 text-white'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/contact" variant="white">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
          className="flex size-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/25 md:hidden"
        >
          <span
            className={`duration-250 block h-0.5 w-5 rounded-full bg-white transition-transform ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`duration-250 block h-0.5 w-5 rounded-full bg-white transition-opacity ${
              mobileOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`duration-250 block h-0.5 w-5 rounded-full bg-white transition-transform ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          mobileOpen
            ? 'max-h-[420px] border-t border-white/[0.08]'
            : 'max-h-0 border-t border-transparent'
        } bg-primary-900/98 backdrop-blur-[14px]`}
      >
        <div className="flex flex-col gap-1 px-5 pb-5 pt-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                isActive(link.href)
                  ? 'bg-white/10 text-white'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-white/[0.08] pt-4">
            <Button href="/contact" variant="white" className="w-full">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { PublicNavbar };
