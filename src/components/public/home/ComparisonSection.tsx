import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { ASSETS } from '../../../constants/content';
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
        <span className="mb-3 inline-block rounded-full bg-lightPrimary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-500">
          The Problem
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl font-montserrat text-3xl font-bold tracking-[-0.02em] text-primary-500 md:text-4xl">
          Stop Struggling With Compliance.{' '}
          <span className="text-gold-400">Start Automating.</span>
        </h2>
      </FadeIn>

      {/* Cards */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* ── Left card: The Old Way ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-[20px] bg-[#C0392B] p-8 shadow-xl md:p-10"
        >
          {/* Frosted watermark logo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Image
              src={ASSETS.logo.whiteIcon}
              alt=""
              width={220}
              height={220}
              className="select-none opacity-[0.07]"
              aria-hidden
            />
          </div>

          {/* Noise texture overlay for depth */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
              The Old Way
            </span>

            {/* Icon spotlight */}
            <div className="my-7 flex justify-center">
              <div className="relative flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={ASSETS.logo.whiteIcon}
                  alt="Zylen"
                  width={44}
                  height={44}
                  className="opacity-40"
                />
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6 font-montserrat text-xl font-bold text-white md:text-2xl">
              Manual. Risky. Stressful.
            </h3>

            {/* Items */}
            <ul className="space-y-3.5">
              {OLD_WAY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XMark />
                  <span className="text-sm leading-relaxed text-white/80 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Right card: With Zylen ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="relative overflow-hidden rounded-[20px] bg-primary-900 p-8 shadow-xl md:p-10"
        >
          {/* Subtle radial glow behind logo */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(212,160,23,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Watermark logo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Image
              src={ASSETS.logo.whiteIcon}
              alt=""
              width={220}
              height={220}
              className="select-none opacity-[0.04]"
              aria-hidden
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
              With Zylen
            </span>

            {/* Icon spotlight */}
            <div className="my-7 flex justify-center">
              <div
                className="relative flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                style={{
                  boxShadow:
                    '0 0 32px rgba(212,160,23,0.18), 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <Image
                  src={ASSETS.logo.whiteIcon}
                  alt="Zylen"
                  width={44}
                  height={44}
                  className="opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                />
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6 font-montserrat text-xl font-bold text-white md:text-2xl">
              Automated. Compliant. Effortless.
            </h3>

            {/* Items */}
            <ul className="space-y-3.5">
              {ZYLEN_WAY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-sm leading-relaxed text-white/80 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA hint */}
      <FadeIn delay={0.3} className="mt-10 text-center">
        <p className="text-sm text-slate-500">
          Ready to switch?{' '}
          <Link
            href="/contact"
            className="font-semibold text-primary-500 underline-offset-2 hover:underline"
          >
            Book a free 30-minute call →
          </Link>
        </p>
      </FadeIn>
    </div>
  </section>
);

export { ComparisonSection };
