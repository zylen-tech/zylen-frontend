import { motion } from 'framer-motion';
import Image from 'next/image';

import { BRAND } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { FadeIn } from '../../ui/FadeIn';

const OLD_WAY = [
  'Manual e-invoice submission to MyInvois',
  'Constant LHDN error codes with no guidance',
  'Retyping data from your accounting system',
  'Compliance failures and audit risk',
  'No real-time submission status',
  'IT team overwhelmed by integration work',
];

const ZYLEN_WAY = [
  'Auto-sync invoices from your accounting system',
  'Real-time MyInvois submission & validation',
  'LHDN error codes decoded automatically',
  'Full audit trail and compliance logs',
  'Zero manual re-entry of data',
  'Live submission status dashboard',
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const XMark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="mt-0.5 shrink-0"
  >
    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.15)" />
    <path
      d="M5 5l6 6M11 5l-6 6"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CheckMark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="mt-0.5 shrink-0"
  >
    <circle cx="8" cy="8" r="8" fill="rgba(74,222,128,0.2)" />
    <path
      d="M4.5 8.5l2.5 2.5 4.5-5"
      stroke="#4ade80"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ComparisonSection = () => (
  <section className="bg-[#F8F9FC] py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {/* Heading */}
      <FadeIn className="mb-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-500">
          The Problem
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl font-montserrat text-2xl font-bold tracking-[-0.02em] text-brand-500 md:text-3xl lg:text-4xl">
          Stop Struggling With Compliance.{' '}
          <span className="text-brand-400">Start Automating.</span>
        </h2>
      </FadeIn>

      {/* Cards */}
      <div className="grid gap-5 md:gap-6">
        {/* ── Left card: The Old Way ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-[20px] bg-[#C0392B] shadow-xl"
        >
          <div className="flex h-full flex-col sm:flex-row">
            {/* Icon panel */}
            <div className="flex shrink-0 items-center justify-center p-8 sm:w-[200px] sm:p-6 md:w-[220px]">
              <Image
                src="/assets/img/icons/Glassmorphism lock icon.png"
                alt="Lock icon"
                width={160}
                height={160}
                className="h-auto w-32 drop-shadow-2xl sm:w-36 md:w-40"
              />
            </div>

            {/* Divider */}
            <div className="hidden w-px self-stretch bg-white/10 sm:block" />

            {/* Content */}
            <div className="flex flex-col justify-center p-7 md:p-8">
              <span className="mb-4 inline-block self-start rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                The Old Way
              </span>
              <h3 className="mb-5 font-montserrat text-lg font-bold text-white md:text-xl">
                Manual. Risky. Stressful.
              </h3>
              <ul className="space-y-3">
                {OLD_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XMark />
                    <span className="text-sm leading-relaxed text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Right card: With Zylen ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="relative overflow-hidden rounded-[20px] bg-brand-900 shadow-xl"
        >
          <div className="flex h-full flex-col sm:flex-row">
            {/* Icon panel */}
            <div className="flex shrink-0 items-center justify-center p-8 sm:w-[200px] sm:p-6 md:w-[220px]">
              <Image
                src="/assets/img/icons/Glassmorphism open folder.png"
                alt="Open folder icon"
                width={160}
                height={160}
                className="h-auto w-32 drop-shadow-2xl sm:w-36 md:w-40"
              />
            </div>

            {/* Divider */}
            <div className="hidden w-px self-stretch bg-white/10 sm:block" />

            {/* Content */}
            <div className="flex flex-col justify-center p-7 md:p-8">
              <span className="mb-4 inline-block self-start rounded-full border border-brand-400/40 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-400">
                With Zylen
              </span>
              <h3 className="mb-5 font-montserrat text-lg font-bold text-white md:text-xl">
                Automated. Compliant. Effortless.
              </h3>
              <ul className="space-y-3">
                {ZYLEN_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckMark />
                    <span className="text-sm leading-relaxed text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <FadeIn
        delay={0.3}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <Button href="/contact" variant="primary">
          Book a Free Call
        </Button>
        <Button href={BRAND.whatsapp} variant="secondary">
          WhatsApp Us
        </Button>
      </FadeIn>
    </div>
  </section>
);

export { ComparisonSection };
