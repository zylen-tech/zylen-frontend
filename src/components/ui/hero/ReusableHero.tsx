import { motion } from 'framer-motion';

type ReusableHeroProps = {
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  description?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const ReusableHero = ({
  eyebrow,
  headline,
  headlineAccent,
  description,
}: ReusableHeroProps) => (
  <section className="relative overflow-hidden bg-neutral-50 pb-24 pt-[calc(70px+4rem)] md:pb-32 md:pt-[calc(80px+6rem)]">
    {/* Subtle radial tint from top */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(5,57,89,0.05),transparent)]" />

    {/* Bottom separator */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-slate-200" />

    <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="mb-5 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-500"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="font-montserrat text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-[3.75rem]"
      >
        {headline}
        {headlineAccent && (
          <>
            {' '}
            <span className="text-brand-500">{headlineAccent}</span>
          </>
        )}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 md:mt-8 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export { ReusableHero };
export type { ReusableHeroProps };
