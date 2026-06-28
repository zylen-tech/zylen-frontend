import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ASSETS, NAV_LINKS } from '../../constants/content';

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

  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    return href === '/'
      ? router.pathname === '/'
      : router.pathname.startsWith(href);
  };

  const isDark = variant === 'dark';

  const getLinkCls = (href: string) => {
    if (isActive(href)) return 'text-gold-400';
    if (scrolled) return 'text-slate-600 hover:text-slate-900';
    return isDark
      ? 'text-white/90 hover:text-white'
      : 'text-slate-700 hover:text-slate-900';
  };

  const getHoverUnderlineCls = () => {
    if (scrolled) return 'bg-slate-300';
    return isDark ? 'bg-white/50' : 'bg-slate-400';
  };

  const getBarCls = () => {
    if (scrolled) return 'bg-slate-700';
    return isDark ? 'bg-white' : 'bg-slate-700';
  };

  const getHamburgerBorderCls = () => {
    if (scrolled) return 'border-slate-200';
    return isDark ? 'border-white/30' : 'border-slate-300';
  };

  const getMobileDrawerCls = () => {
    if (scrolled) return 'border-slate-200 bg-white';
    if (isDark)
      return 'border-white/[0.08] bg-primary-900/98 backdrop-blur-[14px]';
    return 'border-slate-200 bg-white/98 backdrop-blur-[14px]';
  };

  const getMobileLinkCls = (href: string) => {
    if (isActive(href)) return 'bg-gold-50 text-gold-500';
    if (scrolled || !isDark) return 'text-slate-600 hover:bg-slate-50';
    return 'text-white/80 hover:bg-white/10';
  };

  const getBrandNameCls = () => {
    if (scrolled) return 'text-primary-900';
    return isDark ? 'text-white' : 'text-primary-900';
  };

  const getHeaderCls = () => {
    if (scrolled) return 'border-b border-slate-200/80 bg-white shadow-sm';
    if (isDark)
      return 'border-b border-white/[0.08] bg-primary-900/70 backdrop-blur-md';
    return 'border-b border-slate-200/60 bg-white/80 backdrop-blur-md';
  };

  const barCls = getBarCls();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${getHeaderCls()}`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={ASSETS.logo.whiteIconBg}
            alt="Zylen"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <div className="hidden flex-col leading-none md:flex">
            <span
              className={`font-montserrat text-xl font-bold tracking-tight transition-colors duration-300 ${getBrandNameCls()}`}
            >
              ZYLEN
            </span>
            <span className="mt-0.5 font-montserrat text-[0.5625rem] font-medium tracking-[0.12em] text-gold-400">
              E-INVOICE INTEGRATION SERVICE
            </span>
          </div>
        </Link>

        {/* Nav links — absolutely centred on desktop */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative py-1 text-base font-medium transition-colors duration-200 ${getLinkCls(link.href)}`}
              >
                {link.label}
                {active ? (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gold-400" />
                ) : (
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100 ${getHoverUnderlineCls()}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger — right, mobile only */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
          className={`flex size-9 flex-col items-center justify-center gap-1.5 rounded-lg border transition-colors duration-200 md:hidden ${getHamburgerBorderCls()}`}
        >
          <span
            className={`block h-0.5 w-5 rounded-full transition-transform duration-200 ${barCls} ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full transition-opacity duration-200 ${barCls} ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full transition-transform duration-200 ${barCls} ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className={`border-t px-4 pb-4 pt-2 ${getMobileDrawerCls()}`}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`mb-1 block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${getMobileLinkCls(link.href)}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { PublicNavbar };
