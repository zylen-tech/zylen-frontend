import { motion } from 'framer-motion';
import Image from 'next/image';

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
  <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pb-20 sm:pt-24 md:pb-24 md:pt-32">
    {/* Top-left corner decoration */}
    <Image
      src="/assets/img/icons/registration-icon.png"
      alt=""
      width={280}
      height={280}
      className="pointer-events-none absolute left-0 top-0 h-auto w-[100px] select-none opacity-50 sm:w-[160px] md:w-[220px] lg:w-[280px]"
      aria-hidden="true"
    />

    {/* Bottom-right corner decoration */}
    <Image
      src="/assets/img/icons/registration-icon.png"
      alt=""
      width={280}
      height={280}
      className="pointer-events-none absolute bottom-0 right-0 h-auto w-[100px] rotate-180 select-none opacity-50 sm:w-[160px] md:w-[220px] lg:w-[280px]"
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
      {/* Eyebrow */}
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500"
        >
          {eyebrow}
        </motion.span>
      )}

      {/* Two-line headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="font-montserrat text-[2rem] font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]"
      >
        {headline}
        {headlineAccent && (
          <>
            <br />
            <span className="text-[#1a7fbf]">{headlineAccent}</span>
          </>
        )}
      </motion.h1>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease }}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base md:mt-7 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export { ReusableHero };
export type { ReusableHeroProps };
