import { motion } from 'framer-motion';

import { PROBLEM } from '../../../constants/content';
import { FadeIn } from '../../ui/FadeIn';
import { SectionHeading } from '../../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ProblemStrip = () => (
  <section id="problem" className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn className="mb-12 text-center">
        <SectionHeading eyebrow={PROBLEM.eyebrow} headline={PROBLEM.headline} />
      </FadeIn>

      {/* Stat cards */}
      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {PROBLEM.stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-xl border border-slate-200 bg-white p-8 text-center"
          >
            <div className="font-montserrat text-3xl font-extrabold text-primary-500 md:text-4xl">
              {value}
            </div>
            <div className="mt-2 text-sm font-medium text-[#6B7280]">
              {label}
            </div>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-700 md:text-lg">
          {PROBLEM.body}
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-l-4 border-[#fde8cc] border-l-orange-500 bg-[#fff8f0] p-6">
          <div className="flex gap-3">
            <span className="mt-0.5 text-xl">⚠️</span>
            <p className="text-sm font-medium leading-relaxed text-orange-800">
              {PROBLEM.warning}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export { ProblemStrip };
