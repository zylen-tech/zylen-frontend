import { motion } from 'framer-motion';

import { PRICING } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { FadeIn } from '../../ui/FadeIn';
import { SectionHeading } from '../../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Pricing = () => (
  <section id="pricing" className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <FadeIn className="mb-12 text-center">
        <SectionHeading eyebrow={PRICING.eyebrow} headline={PRICING.headline} />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING.tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`relative flex flex-col rounded-xl border bg-white p-8 ${
              tier.recommended
                ? 'border-brand-500 shadow-[0_0_0_2px_#05395920]'
                : 'border-slate-200'
            }`}
          >
            {tier.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-0.5 text-xs font-semibold text-white">
                Recommended
              </span>
            )}

            <div className="flex-1">
              <h3 className="font-montserrat text-base font-bold text-brand-500">
                {tier.name}
              </h3>
              <div className="mt-3">
                <span className="font-montserrat text-2xl font-extrabold text-brand-500">
                  {tier.price}
                </span>
                <span className="ml-1 text-sm text-[#6B7280]">
                  / {tier.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                {tier.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="8"
                        fill="#053959"
                        fillOpacity="0.10"
                      />
                      <path
                        d="M4.5 8l2.5 2.5 4.5-4.5"
                        stroke="#053959"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button
                href="#book-demo"
                variant={tier.recommended ? 'primary' : 'secondary'}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-8 text-center text-sm text-[#6B7280]">
          {PRICING.note}
        </p>
      </FadeIn>
    </div>
  </section>
);

export { Pricing };
