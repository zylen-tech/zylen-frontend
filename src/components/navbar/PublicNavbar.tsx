import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ASSETS, NAV_LINKS } from '../../constants/content';
import { Button } from '../ui/Button';

type PublicNavbarProps = {
  variant?: 'dark' | 'light';
};

const PublicNavbar = ({ variant = 'dark' }: PublicNavbarProps) => {
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

  const isDark = variant === 'dark';

  const getHeaderCls = () => {
    if (isDark) {
      return scrolled
        ? 'border-white/[0.08] bg-primary-900/95 backdrop-blur-[14px]'
        : 'border-transparent bg-primary-900';
    }
    return scrolled
      ? 'border-slate-200/80 bg-white/95 backdrop-blur-[14px] shadow-sm'
      : 'border-transparent bg-white';
  };
  const headerCls = getHeaderCls();

  const linkCls = (href: string) => {
    const active = isActive(href);
    if (isDark) {
      return active
        ? 'bg-white/10 text-white'
        : 'text-white/75 hover:bg-white/10 hover:text-white';
    }
    return active
      ? 'bg-primary-50 text-primary-600'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';
  };

  const drawerCls = isDark
    ? 'bg-primary-900/98 backdrop-blur-[14px]'
    : 'bg-white/98 backdrop-blur-[14px]';

  const drawerBorderCls = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const dividerCls = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const barCls = isDark ? 'bg-white' : 'bg-slate-800';
  const hamburgerBorderCls = isDark ? 'border-white/25' : 'border-slate-300';

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ${headerCls}`}
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
            <span
              className={`font-montserrat text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'}`}
            >
              ZYLEN
            </span>
            <span
              className={`mt-1 font-montserrat text-[0.5625rem] font-medium tracking-[0.12em] ${isDark ? 'text-white/55' : 'text-primary-900/50'}`}
            >
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
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${linkCls(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/contact" variant={isDark ? 'white' : 'primary'}>
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
          className={`flex size-9 flex-col items-center justify-center gap-1.5 rounded-lg border md:hidden ${hamburgerBorderCls}`}
        >
          <span
            className={`duration-250 block h-0.5 w-5 rounded-full transition-transform ${barCls} ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`duration-250 block h-0.5 w-5 rounded-full transition-opacity ${barCls} ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`duration-250 block h-0.5 w-5 rounded-full transition-transform ${barCls} ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          mobileOpen
            ? `max-h-[420px] border-t ${drawerBorderCls}`
            : 'max-h-0 border-t border-transparent'
        } ${drawerCls}`}
      >
        <div className="flex flex-col gap-1 px-5 pb-5 pt-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150 ${linkCls(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
          <div className={`mt-3 border-t pt-4 ${dividerCls}`}>
            <Button
              href="/contact"
              variant={isDark ? 'white' : 'primary'}
              className="w-full"
            >
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { PublicNavbar };
