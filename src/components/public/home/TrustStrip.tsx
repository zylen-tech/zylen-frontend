import { TRUST_STRIP } from '../../../constants/content';

const TrustStrip = () => (
  <section className="border-b border-gray-100 bg-white py-14">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
        {TRUST_STRIP.label}
      </p>
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {TRUST_STRIP.stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="font-montserrat text-4xl font-bold text-primary-500 md:text-5xl">
              {value}
            </span>
            <span className="text-sm text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { TrustStrip };
