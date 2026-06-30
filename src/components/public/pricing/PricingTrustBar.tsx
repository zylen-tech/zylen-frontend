const TRUST_ITEMS = [
  'No long-term contracts',
  'Cancel anytime',
  'Setup in 7 days',
  'LHDN compliant',
  'No setup fee',
];

const DotSeparator = () => (
  <span className="hidden size-1 rounded-full bg-slate-300 sm:block" />
);

const PricingTrustBar = () => (
  <section className="border-y border-slate-100 bg-slate-50 py-5">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
        {TRUST_ITEMS.map((item, i) => (
          <>
            <span key={item} className="text-sm font-medium text-slate-500">
              {item}
            </span>
            {i < TRUST_ITEMS.length - 1 && <DotSeparator key={`dot-${i}`} />}
          </>
        ))}
      </div>
    </div>
  </section>
);

export { PricingTrustBar };
