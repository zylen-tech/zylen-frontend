import { AnimatePresence, motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { useState } from 'react';
import {
  LuFileText,
  LuLayers,
  LuPlugZap,
  LuReceipt,
  LuTriangleAlert,
} from 'react-icons/lu';

import { Meta } from '../../components/layout/Meta';
import { BookDemo } from '../../components/public/shared/BookDemo';
import { HowItWorks } from '../../components/public/shared/HowItWorks';
import { BeforeAfterComparison } from '../../components/solutions/BeforeAfterComparison';
import { NgoComplianceChecker } from '../../components/solutions/NgoComplianceChecker';
import { RelatedSolutions } from '../../components/solutions/RelatedSolutions';
import { TrustBadges } from '../../components/solutions/TrustBadges';
import { UrgencyCallout } from '../../components/solutions/UrgencyCallout';
import { Button } from '../../components/ui/buttons/Button';
import { FadeIn } from '../../components/ui/FadeIn';
import { ReusableHero } from '../../components/ui/hero';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { PublicLayout } from '../../layouts/PublicLayout';
import type { NextPageWithLayout } from '../../types/next';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STATS = [
  {
    value: 'RM 1M+',
    label: 'Annual revenue threshold for mandatory e-invoice compliance',
  },
  { value: '55', label: 'Mandatory fields required per MyInvois submission' },
  {
    value: '1 Jan 2027',
    label: 'LHDN enforcement deadline — applies to all entities',
  },
];

const BENEFITS = [
  {
    Icon: LuReceipt,
    title: 'Donation Receipt Automation',
    description:
      'Auto-submit donation receipts to LHDN MyInvois the moment they are issued. No manual re-entry, no compliance gaps.',
  },
  {
    Icon: LuLayers,
    title: 'Consolidated B2C Submission',
    description:
      'Hundreds of small cash donors? MyInvois allows a single consolidated daily e-invoice for B2C transactions — saving your team enormous effort.',
  },
  {
    Icon: LuFileText,
    title: 'Grant & Sponsorship Invoicing',
    description:
      'Issue compliant e-invoices for government grants, corporate sponsors, and programme funding across multiple projects.',
  },
  {
    Icon: LuPlugZap,
    title: 'Works With Your Existing Software',
    description:
      'Already on AutoCount or SQL Accounting? We build the integration layer — you keep using exactly what you know.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Basic Connect',
    price: 'From RM 4,000',
    note: 'one-time · source code yours',
    description:
      'For NGOs already using AutoCount, SQL Accounting, Xero, or QuickBooks.',
    features: [
      '7–10 day delivery',
      'LHDN sandbox testing included',
      'Source code & documentation',
      '30-day post-launch support',
    ],
    highlight: false,
  },
  {
    name: 'Custom Connect',
    price: 'From RM 6,000',
    note: 'one-time · source code yours',
    description:
      'For NGOs on custom donor portals, legacy databases, or in-house systems.',
    features: [
      '10–14 day delivery',
      'Full field mapping to MyInvois spec',
      'Source code & documentation',
      '30-day post-launch support',
    ],
    highlight: true,
  },
];

const FAQ_ITEMS = [
  {
    question: 'Does the LHDN e-invoice mandate apply to NGOs?',
    answer:
      'Yes. The mandate applies to all entities with annual revenue above RM 1M — including registered societies, foundations, charitable bodies, and religious organisations. Being a non-profit does not exempt you from the requirement.',
  },
  {
    question: 'What types of transactions require e-invoices for NGOs?',
    answer:
      'Donation receipts, grant income, event registration fees, membership fees, merchandise sales, and any sale of goods or services must be submitted through MyInvois. Pure gifts with no consideration may be exempt — we can help you determine which of your transactions apply.',
  },
  {
    question:
      'Will switching to e-invoice affect our Section 44(6) tax exemption receipts?',
    answer:
      'This is one of the most common concerns we hear. MyInvois e-invoices and Section 44(6) tax exemption receipts serve different purposes — one is an LHDN submission requirement, the other is a donor tax deduction document. You can continue issuing your existing Section 44(6) receipts to donors alongside the MyInvois e-invoice. We advise all NGO clients to confirm the specific treatment with their tax adviser, and we ensure our integration does not interfere with your existing receipt workflow.',
  },
  {
    question: 'We use AutoCount or SQL Accounting. Do we need to change?',
    answer:
      'No. Zylen builds an integration layer that sits between your existing accounting software and LHDN MyInvois. You continue using what you have today — we handle the connection to the government portal.',
  },
  {
    question: 'How long does setup take for an NGO?',
    answer:
      'Most NGO integrations go live within 7–14 days. Day 1 is a free discovery call, you receive a fixed-price proposal within 24 hours, and our engineers start the build immediately after approval.',
  },
  {
    question: 'We have a custom donor portal. Is that a different package?',
    answer:
      'Yes. If your donations come through a custom-built platform, website, or in-house system, that falls under our Custom Connect package (from RM 6,000 one-time). We analyse your data model, map your fields to the 55 MyInvois requirements, and build a tailored bridge. Contact us for a scoping call.',
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors duration-200 ${open ? 'text-brand-600' : 'text-slate-400'}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </motion.svg>
);

const CheckIcon = () => (
  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-100">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M1.5 5l2.5 2.5 4.5-4.5"
        stroke="#0f0f0f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const NgoPage: NextPageWithLayout = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Meta
        title="E-Invoice for NGOs & Charities — Zylen"
        description="Automate monthly MyInvois donation submissions for your NGO or charity. LHDN-compliant e-invoice integration in 7–14 days."
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <ReusableHero
        eyebrow="Solutions · NGOs & Charities"
        headline="E-Invoice Compliance for NGOs"
        headlineAccent="& Charities."
        description="LHDN's e-invoice mandate applies to all organisations above RM 1M — including NGOs, charitable bodies, and religious organisations. Zylen automates your donation receipts, grant invoices, and event billing through MyInvois."
      />

      {/* ── Mandate stats ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              The LHDN mandate applies to your organisation
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="rounded-2xl bg-hero-gradient p-8 text-center">
                  <p className="font-montserrat text-3xl font-extrabold text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/55">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 44(6) compliance checker (NGO-only) ──────────────────────── */}
      <NgoComplianceChecker />

      {/* ── Trust badges ─────────────────────────────────────────────────────── */}
      <TrustBadges />

      {/* ── Before / After ───────────────────────────────────────────────────── */}
      <BeforeAfterComparison
        eyebrow="The Reality"
        left={{
          label: 'Without Zylen',
          headline: 'Manual. Risky. Non-compliant.',
          bullets: [
            'Log into MyInvois portal every month manually',
            'Track every donation in a spreadsheet',
            'Miss the 7-day consolidated submission deadline',
            'No individual e-invoice system for donors',
            'Finance team overwhelmed during Ramadan campaigns',
          ],
        }}
        right={{
          label: 'With Zylen',
          headline: 'Automated. Compliant. Effortless.',
          bullets: [
            'Donations auto-submitted to MyInvois from AutoCount or SQL',
            'Individual donor e-invoices generated automatically',
            'Consolidated monthly submission before the 7-day deadline',
            'Full audit trail for LHDN compliance',
            'Finance team focuses on mission — not paperwork',
          ],
        }}
      />

      {/* ── Urgency callout ──────────────────────────────────────────────────── */}
      <UrgencyCallout
        Icon={LuTriangleAlert}
        headline="Section 44(6) approved organisations must issue e-invoices for every donation."
        body="Under LHDN guidelines updated July 2025, all organisations approved under Section 44(6), 44(6B), 44(11B), 44(11C) and 44(11D) must issue e-invoices for all monetary donations — regardless of amount or payment method. A consolidated e-invoice must be submitted to MyInvois within 7 days of each month-end."
      />

      {/* ── Benefits ─────────────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="Built for NGOs"
              headline="Everything Your Organisation Needs"
              subtext="Zylen handles the technical complexity of LHDN compliance so your team can focus on your mission — not paperwork."
              light
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={20} className="text-white/80" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Pricing ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="Transparent Pricing"
              headline="Fixed Price. No Surprises."
              subtext="Choose the package that fits your system. Both include full source code and 30-day post-launch support."
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {PRICING_TIERS.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-3xl border p-8 ${
                    tier.highlight
                      ? 'border-neutral-950 bg-white shadow-md'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  {tier.highlight && (
                    <span className="mb-3 inline-block w-fit rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
                      Custom System
                    </span>
                  )}
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {tier.name}
                  </p>
                  <p className="font-montserrat text-3xl font-extrabold tracking-tight text-neutral-950">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{tier.note}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {tier.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Button
                      href="/contact"
                      variant={tier.highlight ? 'primary' : 'secondary'}
                      className="w-full justify-center"
                    >
                      Get a Free Estimate
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we build for ─────────────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Built for the charitable sector
            </p>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              We build for{' '}
              <span className="font-semibold text-neutral-950">
                registered societies
              </span>
              ,{' '}
              <span className="font-semibold text-neutral-950">
                charitable foundations
              </span>
              ,{' '}
              <span className="font-semibold text-neutral-950">
                zakat bodies
              </span>
              , and{' '}
              <span className="font-semibold text-neutral-950">
                Islamic relief organisations
              </span>{' '}
              across Malaysia — helping them meet LHDN requirements without
              disrupting the donor experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="mb-12 text-center font-montserrat text-3xl font-bold leading-tight tracking-[-0.02em] text-neutral-950 md:text-4xl">
            Questions from NGOs
          </h2>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.question}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? 'border-slate-200 bg-neutral-50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`text-base font-medium leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-brand-600' : 'text-slate-700'
                      }`}
                    >
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                          <p className="text-sm leading-relaxed text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Related solutions ────────────────────────────────────────────────── */}
      <RelatedSolutions exclude="ngo" />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <BookDemo />
    </>
  );
};

NgoPage.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;

export default NgoPage;
