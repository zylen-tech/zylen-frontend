const BADGES = [
  '✓ LHDN MyInvois Compliant',
  '✓ Phase 4 Ready',
  '✓ Fixed Price — No Surprises',
  '✓ Source Code Yours',
];

const TrustBadges = () => (
  <section className="border-b border-slate-100 bg-white py-8">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="flex flex-wrap justify-center gap-3">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export { TrustBadges };
