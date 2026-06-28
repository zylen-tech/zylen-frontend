import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ReusableHeroProps = {
  eyebrow?: string;
  headline: ReactNode;
  description?: string;
  actions?: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

const ReusableHero = ({
  eyebrow,
  headline,
  description,
  actions,
}: ReusableHeroProps) => (
  <section className="bg-primary-900 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        className="mx-auto mt-4 max-w-3xl font-montserrat text-4xl font-extrabold leading-tight tracking-[-0.025em] text-white md:text-5xl"
      >
        {headline}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          {description}
        </motion.p>
      )}

      {actions && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {actions}
        </motion.div>
      )}
    </div>
  </section>
);

export { ReusableHero };
export type { ReusableHeroProps };
