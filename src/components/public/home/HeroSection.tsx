import { motion } from 'framer-motion';

import { BRAND, HERO } from '../../../constants/content';
import { Button } from '../../ui/Button';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroSection = () => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4 text-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5"
      >
        <span className="text-sm font-medium text-white">{HERO.badge}</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="mx-auto max-w-4xl font-montserrat text-4xl font-extrabold leading-tight tracking-[-0.025em] text-white md:text-5xl lg:text-6xl"
      >
        {HERO.headline}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
      >
        {HERO.subheadline}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease }}
        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <Button href="/contact" variant="white">
          {HERO.ctaPrimary}
        </Button>
        <Button href={BRAND.calendly} variant="outline-white">
          {HERO.ctaSecondary}
        </Button>
      </motion.div>

      {/* Urgency badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.42 }}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5"
      >
        <span className="text-xs font-semibold text-orange-300">
          {HERO.urgency}
        </span>
      </motion.div>

      {/* Trust items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
      >
        {HERO.trustItems.map((item) => (
          <span
            key={item}
            className="flex items-center gap-1.5 text-sm font-medium text-white/85"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.15)" />
              <path
                d="M4.5 8l2.5 2.5 4.5-4.5"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
