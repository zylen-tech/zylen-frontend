import { motion } from 'framer-motion';
import Link from 'next/link';

import { SectionHeading } from '../../ui/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

const SYSTEMS = [
  { name: 'AutoCount', note: 'Most popular in Malaysia' },
  { name: 'SQL Accounting', note: 'Widely used by SMEs' },
  { name: 'Xero', note: 'Cloud-based' },
  { name: 'QuickBooks', note: 'International standard' },
  { name: 'Custom ERP', note: 'Any system via API' },
];

const SupportedSystems = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-14 text-center">
        <SectionHeading
          eyebrow="Compatibility"
          headline="Works With Your Existing System"
          subtext="We integrate with all major Malaysian accounting platforms — and any custom system via our API bridge."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SYSTEMS.map((sys, i) => (
          <motion.div
            key={sys.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className={`flex flex-col items-center rounded-2xl border p-6 text-center ${
              sys.name === 'Custom ERP'
                ? 'border-brand-200 bg-brand-50'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div
              className={`mb-3 flex size-12 items-center justify-center rounded-xl text-lg font-extrabold ${
                sys.name === 'Custom ERP'
                  ? 'bg-brand-100 text-brand-500'
                  : 'bg-white text-brand-500 shadow-sm'
              }`}
            >
              {sys.name.charAt(0)}
            </div>
            <span className="font-montserrat text-sm font-bold text-slate-900">
              {sys.name}
            </span>
            <span className="mt-1 text-xs text-slate-400">{sys.note}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        className="mt-8 text-center text-sm text-slate-400"
      >
        Using something not listed?{' '}
        <Link
          href="/contact"
          className="font-semibold text-brand-500 hover:underline"
        >
          Talk to us
        </Link>{' '}
        — if it has an API or export, we can connect it.
      </motion.p>
    </div>
  </section>
);

export { SupportedSystems };
