import { motion } from 'framer-motion';

import { DELIVERY_MODELS } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { SectionHeading } from '../../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const DeliveryModels = () => (
  <section className="bg-brand-100 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-12 text-center">
        <SectionHeading
          eyebrow={DELIVERY_MODELS.eyebrow}
          headline={DELIVERY_MODELS.headline}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {DELIVERY_MODELS.models.map((model, i) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
            className={`flex flex-col rounded-2xl border bg-white p-5 md:p-8 ${
              model.highlight
                ? 'border-brand-500 shadow-[0_0_0_3px_#05395914]'
                : 'border-slate-200'
            }`}
          >
            <span
              className={`mb-5 self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                model.highlight
                  ? 'bg-brand-500 text-white'
                  : 'bg-brand-100 text-brand-500'
              }`}
            >
              {model.badge}
            </span>

            <h3 className="font-montserrat text-xl font-bold text-brand-500">
              {model.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="font-montserrat text-2xl font-extrabold text-brand-500">
                {model.price}
              </span>
              <span className="text-sm text-gray-500">{model.period}</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {model.description}
            </p>

            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 flex flex-col gap-2.5"
            >
              {model.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={listItem}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1.5 5l2.5 2.5 4.5-4.5"
                        stroke="#053959"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-auto pt-8">
              <Button
                href={model.ctaHref}
                variant={model.highlight ? 'primary' : 'secondary'}
                className="w-full"
              >
                {model.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { DeliveryModels };
