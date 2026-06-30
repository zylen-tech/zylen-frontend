import { motion } from 'framer-motion';
import Link from 'next/link';

import { CONNECTORS } from '../../../constants/content';
import { FadeIn } from '../../ui/FadeIn';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const pillItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

const ConnectorsStrip = () => (
  <section className="border-y border-gray-100 bg-white py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <FadeIn>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          {CONNECTORS.eyebrow}
        </p>
      </FadeIn>

      <motion.div
        variants={pillContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {CONNECTORS.items.map((item) => (
          <motion.span
            key={item.name}
            variants={pillItem}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-brand-500"
          >
            {item.name}
          </motion.span>
        ))}
      </motion.div>

      <FadeIn delay={0.4}>
        <p className="mt-7 text-center text-sm text-gray-500">
          {CONNECTORS.fallback}{' '}
          <Link
            href={CONNECTORS.fallbackCta.href}
            className="font-semibold text-brand-500 underline-offset-2 hover:underline"
          >
            {CONNECTORS.fallbackCta.label} →
          </Link>
        </p>
      </FadeIn>
    </div>
  </section>
);

export { ConnectorsStrip };
