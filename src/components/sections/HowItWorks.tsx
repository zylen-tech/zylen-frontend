import { motion } from 'framer-motion';

import { HOW_IT_WORKS } from '../../constants/content';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn className="mb-14 text-center">
        <SectionHeading
          eyebrow={HOW_IT_WORKS.eyebrow}
          headline={HOW_IT_WORKS.headline}
        />
      </FadeIn>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute inset-x-0 top-8 z-0 h-0.5 bg-slate-200" />
          <div className="relative z-10 grid grid-cols-5 gap-4">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full border-2 border-primary-500 bg-white font-montserrat text-sm font-extrabold text-primary-500">
                  {step.number}
                </div>
                <h4 className="mt-4 font-montserrat text-sm font-bold text-primary-500">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="flex flex-col gap-6 md:hidden">
        {HOW_IT_WORKS.steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-white font-montserrat text-xs font-extrabold text-primary-500">
                {step.number}
              </div>
              {i < HOW_IT_WORKS.steps.length - 1 && (
                <div className="mt-2 min-h-8 w-0.5 flex-1 bg-slate-200" />
              )}
            </div>
            <div className="pb-2">
              <h4 className="font-montserrat text-sm font-bold text-primary-500">
                {step.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { HowItWorks };
