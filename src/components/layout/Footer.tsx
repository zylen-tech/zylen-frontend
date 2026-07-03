import Link from 'next/link';

import { BRAND, FOOTER } from '../../constants/content';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-hero-gradient">
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-8 md:pt-20">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand column */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="mb-5 flex items-center gap-3 no-underline">
            <div className="flex flex-col leading-none">
              <span className="font-montserrat text-lg font-extrabold tracking-tight text-white">
                ZYLEN
              </span>
            </div>
          </Link>

          <p className="mb-5 text-sm leading-relaxed text-white/55">
            {BRAND.tagline}
          </p>

          <div className="flex flex-col gap-1.5 text-sm">
            <a
              href={`mailto:${BRAND.email}`}
              className="text-white/80 transition-colors hover:text-white"
            >
              {BRAND.email}
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 transition-colors hover:text-white/80"
            >
              {BRAND.phone}
            </a>
            <span className="text-xs text-white/40">{BRAND.businessHours}</span>
          </div>

          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={BRAND.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-white/55 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-white/55 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.services.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.company.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Legal
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.legal.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/[0.10] pt-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Zylen. All rights reserved. ·{' '}
        {BRAND.website}
      </div>
    </div>
  </footer>
);

export { Footer };
