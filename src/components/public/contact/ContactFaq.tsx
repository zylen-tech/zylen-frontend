import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { SectionHeading } from '../../ui/SectionHeading';

const ITEMS = [
  {
    question: 'How fast will I get a reply?',
    answer:
      'We aim to reply to all emails within 24 hours on business days. For urgent queries, WhatsApp is the fastest way to reach us — we typically respond within a few hours during business hours.',
  },
  {
    question: 'Do you offer support in Bahasa Malaysia?',
    answer:
      'Yes. Our team is fluent in both English and Bahasa Malaysia. You are welcome to reach out in either language and we will respond accordingly.',
  },
  {
    question: 'Do I need to prepare anything before the call?',
    answer:
      "No preparation needed. It helps if you know which accounting software you use (AutoCount, SQL, Xero, etc.) and roughly how many invoices you issue per month — but even if you don't, we can work through it together.",
  },
  {
    question: 'Is the consultation really free?',
    answer:
      'Yes, completely. There is no obligation to proceed after the call. We review your setup, answer your questions, and give you a clear picture of what integration would look like for your business.',
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={open ? '#053959' : '#9ca3af'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <polyline points="6 9 12 15 18 9" />
  </motion.svg>
);

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <SectionHeading
            eyebrow="Quick Answers"
            headline="Before You Reach Out"
          />
        </div>

        <div className="flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-brand-200 bg-brand-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`text-base font-medium leading-snug transition-colors duration-200 ${isOpen ? 'text-brand-500' : 'text-slate-700'}`}
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
                      <div className="border-t border-brand-100 px-6 pb-6 pt-4">
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

export { ContactFaq };
