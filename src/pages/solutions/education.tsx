import { AnimatePresence, motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { useState } from 'react';
import {
  LuBookOpen,
  LuCalendarCheck,
  LuLayoutDashboard,
  LuPlugZap,
  LuTriangleAlert,
} from 'react-icons/lu';

import { Meta } from '../../components/layout/Meta';
import { BookDemo } from '../../components/public/shared/BookDemo';
import { HowItWorks } from '../../components/public/shared/HowItWorks';
import { BeforeAfterComparison } from '../../components/solutions/BeforeAfterComparison';
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
    label: 'LHDN enforcement deadline — private education included',
  },
];

const BENEFITS = [
  {
    Icon: LuBookOpen,
    title: 'Tuition Fee Invoicing',
    description:
      'Auto-submit tuition fee invoices to MyInvois every semester or intake cycle — no manual processing for each student.',
  },
  {
    Icon: LuCalendarCheck,
    title: 'Batch & Recurring Billing',
    description:
      'Handle monthly fee schedules, instalment plans, and yearly billing in bulk. One integration covers every student record.',
  },
  {
    Icon: LuLayoutDashboard,
    title: 'Multi-Programme Support',
    description:
      'Issue compliant e-invoices across different programmes, campuses, and fee structures — all mapped correctly to MyInvois.',
  },
  {
    Icon: LuPlugZap,
    title: 'Works With Your Existing System',
    description:
      'Already using AutoCount, SQL Accounting, or a student management system? We integrate directly — no disruption to your workflow.',
  },
];

const PRICING_FEATURES = [
  '7–14 day delivery',
  'LHDN sandbox testing included',
  'Source code & documentation',
  '30-day post-launch support',
];

const FAQ_ITEMS = [
  {
    question:
      'Does the LHDN e-invoice mandate apply to private schools and colleges?',
    answer:
      'Yes. The mandate applies to all private education providers with annual revenue above RM 1M — including private schools, colleges, universities, tuition centres, and language schools.',
  },
  {
    question: 'What types of education fees require e-invoices?',
    answer:
      'Tuition fees, registration fees, examination fees, accommodation charges, and any other fee collected from students must be submitted as e-invoices through MyInvois. This applies whether billed monthly, per semester, or annually.',
  },
  {
    question:
      'We bill thousands of students. Can the integration handle volume?',
    answer:
      'Yes. Our integration is built for high-volume environments. We handle batch submissions, queue management, and error retry logic so every invoice reaches LHDN — even at scale.',
  },
  {
    question: 'Can you connect to our student management or ERP system?',
    answer:
      'Yes. If your system has an API, database export, or structured data format, we can build the integration. Our Custom Connect package is designed for exactly these scenarios.',
  },
  {
    question: 'How long does the setup take?',
    answer:
      'Standard accounting software integrations go live in 7–10 days. Custom student management systems typically take 10–14 days. We start immediately after proposal approval.',
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

const EducationPage: NextPageWithLayout = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Meta
        title="E-Invoice for Education & Colleges — Zylen"
        description="E-invoice compliance for tuition fees and student billing. LHDN MyInvois integration for private schools, colleges, and universities in 7–14 days."
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <ReusableHero
        eyebrow="Solutions · Education & Colleges"
        headline="E-Invoice Compliance for"
        headlineAccent="Schools & Colleges."
        description="Private schools, colleges, and tuition centres above RM 1M annual revenue must issue e-invoices through LHDN MyInvois. Zylen automates your student billing — tuition fees, registration, and more."
      />

      {/* ── Trust badges ─────────────────────────────────────────────────────── */}
      <TrustBadges />

      {/* ── Mandate stats ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              The LHDN mandate applies to private education providers
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

      {/* ── Before / After ───────────────────────────────────────────────────── */}
      <BeforeAfterComparison
        eyebrow="The Reality"
        left={{
          label: 'Without Zylen',
          headline: 'Manual. Slow. Error-prone.',
          bullets: [
            'Upload student fee invoices one by one to MyInvois portal',
            'Manually map tuition fees to 55 required fields',
            'PTPTN and scholarship invoices handled separately',
            'Rejected invoices require manual correction and resubmission',
            'Admin team overwhelmed every intake cycle',
          ],
        }}
        right={{
          label: 'With Zylen',
          headline: 'Automated. Accurate. Scalable.',
          bullets: [
            'All student fee invoices auto-submitted from your existing system',
            'PTPTN, scholarship, and cash fees handled correctly',
            'Batch submission for entire intake in minutes',
            'Errors caught before submission — zero rejected invoices',
            'Admin team processes intake in hours, not days',
          ],
        }}
      />

      {/* ── Urgency callout ──────────────────────────────────────────────────── */}
      <UrgencyCallout
        Icon={LuTriangleAlert}
        headline="Private schools and colleges above RM 1M must comply by 1 January 2027."
        body="The LHDN e-invoice mandate applies to all private education providers — including tuition centres, language schools, private colleges, and universities. Tuition fees, registration fees, examination fees, and any other student billing must be submitted through MyInvois."
      />

      {/* ── Benefits ─────────────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="Built for Education"
              headline="Student Billing, Fully Automated"
              subtext="From single-campus tuition centres to multi-programme colleges — Zylen handles your MyInvois compliance end to end."
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
              headline="One Fixed Price. No Surprises."
              subtext="Standard accounting software integrations start from RM 4,000. Custom student management systems are scoped individually."
            />
          </div>

          <FadeIn delay={0.15}>
            <div className="mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Basic Connect
              </p>
              <p className="font-montserrat text-4xl font-extrabold tracking-tight text-neutral-950">
                From RM 4,000
              </p>
              <p className="mt-1 text-sm text-slate-500">
                one-time · source code yours
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {PRICING_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/contact" className="w-full justify-center">
                  Get a Free Estimate
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="mb-12 text-center font-montserrat text-3xl font-bold leading-tight tracking-[-0.02em] text-neutral-950 md:text-4xl">
            Questions from Education Providers
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
      <RelatedSolutions exclude="education" />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <BookDemo />
    </>
  );
};

EducationPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default EducationPage;
