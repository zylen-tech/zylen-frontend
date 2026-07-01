import { motion } from 'framer-motion';

import { ABOUT_VALUES } from '../../../constants/content';
import { SectionHeading } from '../../ui/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const MapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

const ZapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const ICON_MAP: Record<string, () => JSX.Element> = {
  shield: ShieldIcon,
  map: MapIcon,
  zap: ZapIcon,
  lock: LockIcon,
};

const OurValues = () => (
  <section className="bg-neutral-50 py-16 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-12 text-center">
        <SectionHeading eyebrow="What We Stand For" headline="Our Values" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_VALUES.map((value, i) => {
          const Icon = ICON_MAP[value.icon] ?? ShieldIcon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                <Icon />
              </div>
              <h3 className="font-montserrat text-base font-extrabold text-neutral-950">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export { OurValues };
