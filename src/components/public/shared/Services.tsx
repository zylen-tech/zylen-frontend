import { motion } from 'framer-motion';

import { SERVICES } from '../../../constants/content';
import { Button } from '../../ui/Button';
import { FadeIn } from '../../ui/FadeIn';
import { SectionHeading } from '../../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Services = () => (
  <section id="services" className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn className="mb-12 text-center">
        <SectionHeading
          eyebrow={SERVICES.eyebrow}
          headline={SERVICES.headline}
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.cards.map((card, i) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`relative flex flex-col rounded-xl border bg-white p-8 ${
              card.popular
                ? 'border-primary-500 shadow-[0_0_0_2px_#05395920]'
                : 'border-slate-200'
            }`}
          >
            {card.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-0.5 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="font-montserrat text-lg font-bold text-primary-500">
                {card.name}
              </h3>
              <div className="mt-3 font-montserrat text-2xl font-extrabold text-primary-500">
                {card.price}
              </div>
              <div className="mt-1 text-sm font-medium text-[#6B7280]">
                ⏱ {card.timeline}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {card.description}
              </p>
            </div>

            <div className="mt-8">
              <Button
                href="#book-demo"
                variant={card.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                {card.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { Services };
