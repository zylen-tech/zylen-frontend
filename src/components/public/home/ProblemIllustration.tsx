import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type CardConfig = {
  label: string;
  avatarBg: string;
  avatarText: string;
  invoice: string;
  status: string;
  statusCls: string;
  meta: string;
  motionY: number;
  rotate: number;
  delay: number;
};

const CARDS: CardConfig[] = [
  {
    label: 'Spreadsheet',
    avatarBg: '#3b82f6',
    avatarText: 'XL',
    invoice: 'Invoice #00421',
    status: 'Not MyInvois format',
    statusCls: 'text-slate-500',
    meta: '',
    motionY: 28,
    rotate: -2,
    delay: 0.1,
  },
  {
    label: 'Wave',
    avatarBg: '#1370e2',
    avatarText: 'W',
    invoice: 'Invoice #00422',
    status: 'No LHDN submission',
    statusCls: 'text-slate-500',
    meta: '',
    motionY: -10,
    rotate: 0.5,
    delay: 0.2,
  },
  {
    label: 'Manual Bookkeeping',
    avatarBg: '#94a3b8',
    avatarText: '?',
    invoice: 'Handwritten ledger',
    status: 'No compliance trail',
    statusCls: 'text-slate-500',
    meta: '',
    motionY: 22,
    rotate: 2.5,
    delay: 0.3,
  },
];

const IllustrationCard = ({
  label,
  avatarBg,
  avatarText,
  invoice,
  status,
  statusCls,
  meta,
  motionY,
  rotate,
  delay,
}: CardConfig) => (
  <motion.div
    initial={{ opacity: 0, y: motionY + 36, rotate }}
    whileInView={{ opacity: 1, y: motionY, rotate }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.65, delay, ease: EASE }}
    className="relative w-[272px] shrink-0 rounded-2xl bg-white p-5"
    style={{
      boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
    }}
  >
    {/* Grey dot — top right */}
    <span className="absolute right-4 top-4 size-1.5 rounded-full bg-slate-200" />

    {/* Source label */}
    <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
      {label}
    </p>

    {/* Invoice row */}
    <div className="flex items-center gap-3">
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{ backgroundColor: avatarBg }}
      >
        {avatarText}
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-neutral-950">
          {invoice}
        </p>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className={`text-xs font-medium ${statusCls}`}>{status}</span>
          {meta && (
            <>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-400">{meta}</span>
            </>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const ProblemIllustration = () => (
  <section className="bg-[#fafafa] py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mb-20 text-center"
      >
        <h2 className="font-sans text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
          Great for bookkeeping. Not built for MyInvois.
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-lg leading-relaxed text-slate-500">
          Spreadsheets, Wave, and manual records keep your books in order — they
          just weren&apos;t designed to submit e-invoices to LHDN.
        </p>
      </motion.div>

      {/* Cards — staggered row, scrollable until xl */}
      <div className="-mx-5 overflow-x-auto px-5 [-ms-overflow-style:none] [scrollbar-width:none] xl:mx-0 xl:overflow-visible xl:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center justify-center gap-6 pb-4 xl:pb-0">
          {CARDS.map((card) => (
            <IllustrationCard key={card.label} {...card} />
          ))}
        </div>
      </div>

      {/* Bottom caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
        className="mt-20 text-center text-lg font-bold text-neutral-950"
      >
        Same invoices. One quiet addition: LHDN-ready submission.
      </motion.p>
    </div>
  </section>
);

export { ProblemIllustration };
