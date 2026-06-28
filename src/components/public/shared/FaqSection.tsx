import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { FAQ } from '../../../constants/content';

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={open ? '#1a7fbf' : '#9ca3af'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <polyline points="6 9 12 15 18 9" />
  </motion.svg>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="mb-12 text-center font-montserrat text-4xl font-bold leading-tight tracking-[-0.02em] text-primary-900 md:text-5xl">
          {FAQ.headline}{' '}
          <span className="text-[#1a7fbf]">{FAQ.headlineAccent}</span>
        </h2>

        <div className="flex flex-col gap-3">
          {FAQ.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#1a7fbf]/20 bg-[#f0f6fc]'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`text-base font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#1a7fbf]' : 'text-slate-700'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#1a7fbf]/15 px-6 pb-6 pt-4">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
