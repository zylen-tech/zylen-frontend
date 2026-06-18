import { motion } from 'framer-motion';

import { BOOK_DEMO, BRAND } from '../../constants/content';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BookDemo = () => (
  <section id="book-demo" className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionHeading
            eyebrow={BOOK_DEMO.eyebrow}
            headline={BOOK_DEMO.headline}
          />
        </FadeIn>

        <ul className="mt-8 flex flex-col gap-3 text-left">
          {BOOK_DEMO.bullets.map((bullet, i) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
              className="flex items-start gap-3"
            >
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: '#e8eff4' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1.5 5l2.5 2.5 4.5-4.5"
                    stroke="#053959"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className="text-sm leading-relaxed"
                style={{ color: '#334155' }}
              >
                {bullet}
              </span>
            </motion.li>
          ))}
        </ul>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={BRAND.calendly}>{BOOK_DEMO.ctaPrimary}</Button>
            <Button href={BRAND.whatsapp} variant="secondary">
              {BOOK_DEMO.ctaSecondary}
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-6 text-xs" style={{ color: '#6B7280' }}>
            {BOOK_DEMO.trustNote}
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

export { BookDemo };
