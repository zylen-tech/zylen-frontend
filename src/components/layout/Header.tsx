import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { NAV_LINKS } from '../../constants/content';
import { Button } from '../ui/Button';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(2, 23, 36, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid transparent',
        boxSizing: 'border-box',
        transition:
          'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
        >
          <Image
            src="/assets/brand/logo/white_icon-bg.png"
            alt="Zylen icon"
            width={40}
            height={40}
            style={{ height: '2.5rem', width: 'auto', objectFit: 'contain' }}
            priority
          />
          <div
            style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}
          >
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: '1.125rem',
                letterSpacing: '-0.01em',
                color: '#ffffff',
              }}
            >
              ZYLEN
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: '0.5rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.55)',
                marginTop: '0.2rem',
              }}
            >
              E-INVOICE INTEGRATION SERVICE
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
                (e.currentTarget as HTMLElement).style.background =
                  'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  'rgba(255,255,255,0.8)';
                (e.currentTarget as HTMLElement).style.background =
                  'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="#book-demo" variant="white">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex size-9 flex-col items-center justify-center gap-1.5 rounded-lg border md:hidden"
          style={{ borderColor: 'rgba(255,255,255,0.25)' }}
        >
          <span
            className="block h-0.5 w-5 rounded-full"
            style={{
              background: '#ffffff',
              transition: 'transform 0.25s ease',
              transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-5 rounded-full"
            style={{
              background: '#ffffff',
              opacity: mobileOpen ? 0 : 1,
              transition: 'opacity 0.25s ease',
            }}
          />
          <span
            className="block h-0.5 w-5 rounded-full"
            style={{
              background: '#ffffff',
              transition: 'transform 0.25s ease',
              transform: mobileOpen
                ? 'translateY(-8px) rotate(-45deg)'
                : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="overflow-hidden md:hidden"
        style={{
          maxHeight: mobileOpen ? '400px' : '0px',
          transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
          borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
          background: 'rgba(2, 23, 36, 0.96)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}
      >
        <div className="flex flex-col gap-1 px-4 pb-5 pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2">
            <Button href="#book-demo" variant="white" className="w-full">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
