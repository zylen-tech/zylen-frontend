import Image from 'next/image';
import Link from 'next/link';

import { BRAND, FOOTER } from '../../constants/content';

const Footer = () => (
  <footer
    style={{
      backgroundImage: 'url(/assets/background/blur-img-bg-1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className="rounded-xl border-t border-gray-200 pt-10"
  >
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-14">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand column */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link
            href="/"
            className="mb-4"
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
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1,
              }}
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
          <p
            className="mb-5 text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            E-Invoice Integration Made Simple.
          </p>
          <div
            className="flex flex-col gap-1.5 text-sm"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            <a
              href={`mailto:${BRAND.email}`}
              className="hover:underline"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              {BRAND.email}
            </a>
            <span>{BRAND.phone}</span>
            <span>{BRAND.location}</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#ffffff' }}
          >
            Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.services.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm transition-colors duration-150 hover:underline"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      'rgba(255,255,255,0.6)';
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#ffffff' }}
          >
            Company
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.company.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      'rgba(255,255,255,0.6)';
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#ffffff' }}
          >
            Legal
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {BRAND.ssm}
            </li>
            {FOOTER.legal.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      'rgba(255,255,255,0.6)';
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="mt-10 border-t pt-6 text-center text-xs"
        style={{
          borderColor: 'rgba(255,255,255,0.12)',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        © {new Date().getFullYear()} Zylen Sdn Bhd. All rights reserved.
      </div>
    </div>
  </footer>
);

export { Footer };
