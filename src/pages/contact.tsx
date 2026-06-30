import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { BookDemo } from '../components/public/shared/BookDemo';
import { ReusableHero } from '../components/ui/hero';
import { BRAND, PAGE_HEROES } from '../constants/content';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const ContactPage: NextPageWithLayout = () => (
  <>
    <Meta
      title="Contact — Zylen E-Invoice Integration"
      description="Book a free 30-minute call. We review your setup and deliver a fixed-price proposal within 24 hours."
    />
    <ReusableHero
      eyebrow={PAGE_HEROES.contact.eyebrow}
      headline={PAGE_HEROES.contact.headline}
      headlineAccent={PAGE_HEROES.contact.headlineAccent}
      description={PAGE_HEROES.contact.description}
    />
    <BookDemo />

    {/* Direct contact details */}
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="mb-8 font-montserrat text-2xl font-bold text-brand-500">
          Other Ways to Reach Us
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${BRAND.email}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#053959"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm font-semibold text-brand-500">Email</span>
            <span className="text-xs text-[#6B7280]">{BRAND.email}</span>
          </a>

          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#053959">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="text-sm font-semibold text-brand-500">
              WhatsApp
            </span>
            <span className="text-xs text-[#6B7280]">{BRAND.phone}</span>
          </a>

          <a
            href={BRAND.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#053959"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-sm font-semibold text-brand-500">
              Book a Call
            </span>
            <span className="text-xs text-[#6B7280]">via Calendly</span>
          </a>
        </div>

        <p className="mt-8 text-sm text-[#6B7280]">
          Based in {BRAND.location} · {BRAND.ssm}
        </p>
      </div>
    </section>
  </>
);

ContactPage.getLayout = (page: ReactElement) => (
  <PublicLayout navVariant="light">{page}</PublicLayout>
);

export default ContactPage;
