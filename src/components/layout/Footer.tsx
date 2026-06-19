import Image from 'next/image';
import Link from 'next/link';

import { ASSETS, BRAND, FOOTER } from '../../constants/content';

const Footer = () => (
  <footer className="rounded-xl border-t border-gray-200 bg-[url('/assets/background/blur-img-bg-1.png')] bg-cover bg-center bg-no-repeat pt-10">
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-14">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand column */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="mb-4 flex items-center gap-3 no-underline">
            <Image
              src={ASSETS.logo.whiteIconBg}
              alt="Zylen icon"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
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
          <p className="mb-5 text-sm leading-relaxed text-white/60">
            E-Invoice Integration Made Simple.
          </p>
          <div className="flex flex-col gap-1.5 text-sm text-white/60">
            <a
              href={`mailto:${BRAND.email}`}
              className="text-white/90 hover:underline"
            >
              {BRAND.email}
            </a>
            <span>{BRAND.phone}</span>
            <span>{BRAND.location}</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.services.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-white hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER.company.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
            Legal
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li className="text-xs text-white/50">{BRAND.ssm}</li>
            {FOOTER.legal.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/[0.12] pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Zylen Sdn Bhd. All rights reserved.
      </div>
    </div>
  </footer>
);

export { Footer };
