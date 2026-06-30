import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { HERO } from '../../../constants/content';
import { ArrowButton } from '../../ui/buttons/ArrowButton';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
});

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-hero-gradient pb-0 pt-28 md:pt-36"
    >
      {/* Radial glow — center top */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse, #053959 0%, transparent 70%)',
        }}
      />

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Content — parallax up + fade on scroll ──────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-7xl px-5 text-center md:px-8"
      >
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/75">
            {HERO.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto max-w-4xl font-montserrat text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Connect Your Business to <br className="hidden sm:block" />
          {"Malaysia's E-Invoice System "}
          <span className="bg-gradient-to-r from-brand-300 to-white bg-clip-text text-transparent">
            — In 7 Days
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ArrowButton href="/contact">{HERO.ctaPrimary}</ArrowButton>
        </motion.div>
      </motion.div>

      {/* ── Dashboard — slower parallax ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 56 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        style={{ y: dashboardY, scale: dashboardScale }}
        className="relative mx-auto mt-16 max-w-6xl px-5 md:px-8"
      >
        {/* Glow behind dashboard */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 opacity-40 blur-[80px]"
          style={{
            background: 'radial-gradient(ellipse, #053959 0%, transparent 70%)',
          }}
        />

        {/* Browser chrome */}
        <div className="overflow-hidden rounded-t-2xl shadow-[0_-12px_80px_rgba(5,57,89,0.6)]">
          <div className="flex items-center gap-3 bg-[#0d1f2d] px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full bg-red-400/50" />
              <span className="size-3 rounded-full bg-yellow-400/50" />
              <span className="size-3 rounded-full bg-green-400/50" />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <span className="rounded-md bg-white/[0.07] px-6 py-1 text-xs text-white/30">
                app.zylen.com.my/dashboard
              </span>
            </div>
          </div>

          <Image
            src="/assets/img/brand/dashnoard.jpg"
            alt="Zylen e-invoice dashboard"
            width={1280}
            height={720}
            className="w-full object-cover object-top"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export { HeroSection };
