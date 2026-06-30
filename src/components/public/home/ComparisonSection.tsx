import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { BRAND } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { FadeIn } from '../../ui/FadeIn';
import { SectionHeading } from '../../ui/SectionHeading';

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

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2.5 2.5l7 7M9.5 2.5l-7 7"
      stroke="#D11203"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M1.5 6.5l3 3 6-6"
      stroke="#0348D1"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type CardProps = {
  illustration: string;
  illustrationAlt: string;
  title: string;
  subtitle: string;
  items: string[];
  variant: 'light' | 'dark';
};

const ComparisonCard = ({
  illustration,
  illustrationAlt,
  title,
  subtitle,
  items,
  variant,
}: CardProps) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`relative size-full overflow-hidden rounded-3xl ${
        isDark
          ? 'shadow-[0_8px_60px_rgba(2,10,20,0.5)]'
          : 'shadow-[0_8px_48px_rgba(5,57,89,0.12)]'
      }`}
      style={
        isDark
          ? { background: 'linear-gradient(295deg, #003ec1 50%, #6475f6 100%)' }
          : { backgroundColor: 'rgb(249, 252, 255)' }
      }
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #020a14, #053959)'
            : 'radial-gradient(ellipse at 20% 80%, rgba(209,224,255,0.5) 0%, transparent 60%)',
        }}
      />

      <div className="relative flex h-full flex-col md:flex-row">
        {/* Illustration */}
        <div className="flex shrink-0 items-center justify-center p-4 md:h-auto md:w-[42%] md:self-stretch md:p-10">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              src={illustration}
              alt={illustrationAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div
          className={`hidden w-px self-stretch md:block ${isDark ? 'bg-white/10' : 'bg-[#D1E0FF]/60'}`}
        />

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 md:p-10">
          <h3
            className={`font-montserrat text-lg font-extrabold tracking-[-0.02em] sm:text-xl md:text-2xl ${
              isDark ? 'text-white' : 'text-[#171717]'
            }`}
          >
            {title}
          </h3>
          <p
            className={`mb-6 mt-1 text-sm ${isDark ? 'text-white/50' : 'text-slate-400'}`}
          >
            {subtitle}
          </p>

          <ul className="space-y-2.5 sm:space-y-3.5">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: isDark
                      ? 'rgb(235, 241, 255)'
                      : 'rgb(209, 224, 255)',
                  }}
                >
                  {isDark ? <CheckIcon /> : <XIcon />}
                </span>
                <span
                  className={`text-sm leading-relaxed ${isDark ? 'text-[rgb(229,231,235)]' : 'text-[rgb(23,23,23)]'}`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CARD_DATA = [
  {
    illustration: '/assets/img/icons/Glassmorphism lock icon.png',
    illustrationAlt: 'Lock icon',
    title: 'The Usual Way',
    subtitle: 'Manual. Risky. Stressful.',
    items: OLD_WAY,
    variant: 'light' as const,
  },
  {
    illustration: '/assets/img/icons/Glassmorphism open folder.png',
    illustrationAlt: 'Open folder icon',
    title: 'With Zylen',
    subtitle: 'Automated. Compliant. Effortless.',
    items: ZYLEN_WAY,
    variant: 'dark' as const,
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const [card1Data, card2Data] = CARD_DATA as [CardProps, CardProps];

const ComparisonSection = () => {
  const scrollZoneRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollZoneRef,
    offset: ['start start', 'end end'],
  });

  // Card 1: holds still until 40%, then quick 3D push-back exit by 62%
  const card1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.62], [1, 1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.4, 0.62], [1, 0.86]);
  const card1Y = useTransform(scrollYProgress, [0.4, 0.62], [0, -110]);

  // Card 2: starts rising at 38%, fully locked by 62%
  const card2Opacity = useTransform(scrollYProgress, [0.38, 0.62], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.38, 0.62], [120, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.38, 0.62], [0.93, 1]);

  // Progress track fills top-to-bottom with scroll
  const trackFill = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const label1Opacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.62],
    [1, 1, 0],
  );
  const label2Opacity = useTransform(scrollYProgress, [0.38, 0.62], [0, 1]);

  return (
    <section className="bg-white">
      {/* ── Heading ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pb-0 pt-20 md:px-8 md:pt-28">
        <div className="text-center">
          <SectionHeading
            eyebrow="Transformation"
            headline="Stop Struggling With Compliance. Start Automating."
          />
        </div>
      </div>

      {/* ── Desktop: sticky scroll stack ─────────────────────────── */}
      <div ref={scrollZoneRef} className="relative hidden h-[280vh] md:block">
        {/* Sticky frame */}
        <div
          className="sticky overflow-hidden"
          style={{ top: '80px', height: 'calc(100vh - 80px)' }}
        >
          {/* Side progress indicator */}
          <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-10">
            {/* Counter label */}
            <div className="relative h-5 w-6 text-center">
              <motion.span
                style={{ opacity: label1Opacity }}
                className="absolute inset-0 text-xs font-bold tabular-nums text-brand-500"
              >
                01
              </motion.span>
              <motion.span
                style={{ opacity: label2Opacity }}
                className="absolute inset-0 text-xs font-bold tabular-nums text-white"
              >
                02
              </motion.span>
            </div>

            {/* Vertical track */}
            <div className="relative h-20 w-[2px] overflow-hidden rounded-full bg-white/20">
              <motion.div
                style={{ height: trackFill }}
                className="absolute top-0 w-full rounded-full bg-brand-300"
              />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              02
            </span>
          </div>

          {/* Card stack */}
          <div className="relative mx-auto size-full max-w-7xl px-5 md:px-8">
            {/* Card 1 */}
            <motion.div
              style={{
                opacity: card1Opacity,
                scale: card1Scale,
                y: card1Y,
              }}
              className="absolute inset-x-5 inset-y-3 md:inset-x-8 md:inset-y-5"
            >
              <ComparisonCard {...card1Data} />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              style={{
                opacity: card2Opacity,
                y: card2Y,
                scale: card2Scale,
              }}
              className="absolute inset-x-5 inset-y-3 md:inset-x-8 md:inset-y-5"
            >
              <ComparisonCard {...card2Data} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Mobile: normal stacked ───────────────────────────────── */}
      <div className="mx-auto mt-10 max-w-7xl px-5 md:hidden">
        <div className="flex flex-col gap-5">
          {CARD_DATA.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
            >
              <ComparisonCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 md:pb-28">
        <FadeIn className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
};

export { ComparisonSection };
