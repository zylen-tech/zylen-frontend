import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ASSETS, BRAND, NAV_LINKS } from '../../constants/content';
import { Button } from '../ui/buttons/Button';

type NavbarProps = {
  variant?: 'dark' | 'light';
};

const MenuIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const slideDown = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.22, ease: 'easeInOut' as const },
};

const Navbar = ({ variant = 'dark' }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const isDark = variant === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    return href === '/'
      ? router.pathname === '/'
      : router.pathname.startsWith(href);
  };

  const getNavBg = () => {
    if (scrolled) return 'bg-white shadow-md border-b border-slate-100';
    return isDark
      ? 'bg-transparent border-b border-white/10'
      : 'bg-white border-b border-slate-100 shadow-sm';
  };

  const getLinkActiveCls = () =>
    scrolled || !isDark ? 'text-brand-500' : 'text-white';
  const getLinkCls = () =>
    scrolled || !isDark
      ? 'text-slate-600 hover:text-brand-900'
      : 'text-white/80 hover:text-white';
  const getUnderlineCls = () =>
    scrolled || !isDark ? 'bg-brand-500' : 'bg-white';
  const getToggleCls = () =>
    scrolled || !isDark
      ? 'text-slate-600 hover:bg-slate-50 hover:text-brand-900'
      : 'text-white hover:bg-white/10';
  const getLogoNameCls = () =>
    scrolled || !isDark ? 'text-brand-900' : 'text-white';
  const getLogoSubCls = () =>
    scrolled || !isDark ? 'text-brand-400' : 'text-white/60';
  const getLogoSrc = () =>
    scrolled || !isDark ? ASSETS.logo.icon : ASSETS.logo.whiteIconBg;
  const getWhatsappVariant = () =>
    (scrolled || !isDark ? 'secondary' : 'outline-white') as
      | 'secondary'
      | 'outline-white';
  const getCallVariant = () =>
    (scrolled || !isDark ? 'primary' : 'white') as 'primary' | 'white';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${getNavBg()}`}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-6 px-5 md:h-[80px] md:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src={getLogoSrc()}
            alt="Zylen"
            width={40}
            height={40}
            className="h-9 w-auto object-contain transition-all duration-300 md:h-10"
            priority
          />
          <div className="flex flex-col leading-none">
            <p
              className={`font-montserrat text-sm font-bold leading-tight transition-colors duration-300 md:text-base ${getLogoNameCls()}`}
            >
              ZYLEN
            </p>
            <p
              className={`hidden font-montserrat text-[0.5rem] font-medium tracking-[0.12em] transition-colors duration-300 md:block ${getLogoSubCls()}`}
            >
              E-INVOICE INTEGRATION
            </p>
          </div>
        </Link>

        {/* Desktop nav — centred */}
        <div className="hidden flex-1 items-center justify-center gap-5 md:flex lg:gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-0.5 text-xs font-medium transition-colors duration-300 lg:text-sm ${active ? getLinkActiveCls() : getLinkCls()}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-200 ${getUnderlineCls()} ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA — desktop only */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Button
            href={BRAND.whatsapp}
            variant={getWhatsappVariant()}
            className="hidden lg:inline-flex"
          >
            WhatsApp Us
          </Button>
          <Button href="/contact" variant={getCallVariant()}>
            Book a Free Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
          className={`flex size-9 items-center justify-center rounded-lg transition-colors duration-150 md:hidden ${getToggleCls()}`}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            {...slideDown}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors duration-150 ${
                      active
                        ? 'bg-brand-100 text-brand-500'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex flex-col gap-4 border-t border-slate-100 pt-3">
                <Button
                  href={BRAND.whatsapp}
                  variant="secondary"
                  className="w-full"
                >
                  WhatsApp Us
                </Button>
                <Button href="/contact" variant="primary" className="w-full">
                  Book a Free Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
