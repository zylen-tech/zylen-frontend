import { motion } from 'framer-motion';

import { SectionHeading } from '../../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const PlugIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h3" />
    <path d="M17 7h3a2 2 0 012 2v6a2 2 0 01-2 2h-3" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <line x1="7" y1="8" x2="7" y2="16" />
    <line x1="17" y1="8" x2="17" y2="16" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const FEATURES = [
  {
    Icon: ShieldIcon,
    title: '100% Compliance with LHDN e-Invoice Guideline',
    body: "Zylen is always up to date with LHDN's latest e-Invoice Malaysia requirements. Our integration middleware ensures full compliance for businesses of all sizes while streamlining the submission process through secure, automated reporting to MyInvois.",
  },
  {
    Icon: PlugIcon,
    title: 'Seamless Integration for e-Invoicing Malaysia',
    body: 'Zylen connects with the accounting software Malaysian businesses already use — AutoCount, SQL Accounting, Xero, and QuickBooks. Our integration layer enables a unified e-Invoice workflow without disrupting your existing systems.',
  },
  {
    Icon: LockIcon,
    title: 'Secure & Reliable e-Invoice Platform',
    body: 'Zylen is built with security and data integrity at its core. Enterprise-grade encryption safeguards every e-Invoice transaction, ensuring reliability and data protection for Malaysian SMEs throughout the entire submission process.',
  },
];

const WhyZylen = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-4 text-center">
        <SectionHeading
          eyebrow="Why choose Zylen?"
          headline="All Your e-Invoicing Needs in One Place"
          subtext="Say goodbye to compliance headaches, e-Invoice system integration issues, or manual invoicing overload with Zylen — Malaysia's trusted e-Invoice integration middleware for SMEs and growing businesses."
        />
      </div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {FEATURES.map(({ Icon, title, body }) => (
          <motion.div
            key={title}
            variants={cardItem}
            className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-brand-50 p-7 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(5,57,89,0.08)]"
          >
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-brand-100 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
              <Icon />
            </div>
            <h3 className="mb-3 font-montserrat text-base font-bold leading-snug tracking-[-0.01em] text-brand-900 md:text-lg">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export { WhyZylen };
