import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type HeroProps = {
  badge?: string;
  headline: ReactNode;
  subheadline?: string;
  urgency?: string;
  actions?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = ({
  badge,
  headline,
  subheadline,
  urgency,
  actions,
  footer,
  className = '',
}: HeroProps) => (
  <section className={`pb-20 pt-24 md:pb-28 md:pt-32 ${className}`}>
    <div className="mx-auto max-w-6xl px-4 text-center">
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5"
        >
          <span className="text-sm font-medium text-white">{badge}</span>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="mx-auto max-w-4xl font-montserrat text-4xl font-extrabold leading-tight tracking-[-0.025em] text-white md:text-5xl lg:text-6xl"
      >
        {headline}
      </motion.h1>

      {subheadline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {subheadline}
        </motion.p>
      )}

      {actions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {actions}
        </motion.div>
      )}

      {urgency && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5"
        >
          <span className="text-xs font-semibold text-orange-300">
            {urgency}
          </span>
        </motion.div>
      )}

      {footer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10"
        >
          {footer}
        </motion.div>
      )}
    </div>
  </section>
);

export { Hero };
export type { HeroProps };
