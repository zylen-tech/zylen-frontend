import { motion } from 'framer-motion';

import { PRICING_ADDONS } from '../../../constants/content';
import { SectionHeading } from '../../ui/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

const AddOns = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-14 text-center">
        <SectionHeading
          eyebrow="Add-Ons"
          headline="Extend Your Plan"
          subtext="Optional extras available on any tier — only pay for what you need."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRICING_ADDONS.map((addon, i) => (
          <motion.div
            key={addon.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.09, ease }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="font-montserrat text-sm font-extrabold text-slate-900">
              {addon.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {addon.description}
            </p>
            <p className="mt-5 font-montserrat text-sm font-bold text-neutral-950">
              {addon.price}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { AddOns };
