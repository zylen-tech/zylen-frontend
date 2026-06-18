import { motion } from 'framer-motion';

import { PROBLEM } from '../../constants/content';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Problem = () => (
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
            className="rounded-xl border p-8 text-center"
            style={{ background: '#ffffff', borderColor: '#E2E8F0' }}
          >
            <div
              className="text-3xl font-extrabold md:text-4xl"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#053959' }}
            >
              {value}
            </div>
            <div
              className="mt-2 text-sm font-medium"
              style={{ color: '#6B7280' }}
            >
              {label}
            </div>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <p
          className="mx-auto max-w-3xl text-center text-base leading-relaxed md:text-lg"
          style={{ color: '#334155' }}
        >
          {PROBLEM.body}
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div
          className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 p-6"
          style={{
            background: '#fff8f0',
            borderLeftColor: '#f97316',
            borderTopColor: '#E2E8F0',
            borderRightColor: '#E2E8F0',
            borderBottomColor: '#E2E8F0',
            border: '1px solid #fde8cc',
            borderLeft: '4px solid #f97316',
          }}
        >
          <div className="flex gap-3">
            <span className="mt-0.5 text-xl">⚠️</span>
            <p
              className="text-sm font-medium leading-relaxed"
              style={{ color: '#9a3412' }}
            >
              {PROBLEM.warning}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export { Problem };
