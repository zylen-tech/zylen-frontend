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
  <section
    className="relative overflow-hidden pb-24 pt-[calc(70px+4rem)] md:pb-32 md:pt-[calc(80px+6rem)]"
    style={{ background: 'linear-gradient(160deg, #020a14 0%, #053959 100%)' }}
  >
    {/* Radial glow */}
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]"
      style={{
        background: 'radial-gradient(ellipse, #1d6fa4 0%, transparent 70%)',
      }}
    />

    {/* Line grid */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    {/* Bottom fade to white */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/[0.04] to-transparent" />

    <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="font-montserrat text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
      >
        {headline}
        {headlineAccent && (
          <>
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #60a5fa 0%, #93c5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {headlineAccent}
            </span>
          </>
        )}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 md:mt-8 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export { ReusableHero };
export type { ReusableHeroProps };
