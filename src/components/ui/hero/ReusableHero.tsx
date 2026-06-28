import { motion } from 'framer-motion';
import Image from 'next/image';

type ReusableHeroProps = {
  headline: string;
  headlineAccent?: string;
  description?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const ReusableHero = ({
  headline,
  headlineAccent,
  description,
}: ReusableHeroProps) => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32">
    {/* Top-left corner decoration */}
    <Image
      src="/assets/img/icons/registration-icon.png"
      alt=""
      width={280}
      height={280}
      className="pointer-events-none absolute left-0 top-0 select-none opacity-50"
      aria-hidden="true"
    />

    {/* Bottom-right corner decoration */}
    <Image
      src="/assets/img/icons/registration-icon.png"
      alt=""
      width={280}
      height={280}
      className="pointer-events-none absolute bottom-0 right-0 rotate-180 select-none opacity-50"
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
      {/* Two-line headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="font-montserrat text-5xl font-normal leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-[4.5rem]"
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
          className="mx-auto max-w-xl text-base leading-relaxed text-slate-500 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export { ReusableHero };
export type { ReusableHeroProps };
