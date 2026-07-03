import Link from 'next/link';

const MUST_COMPLY = [
  'Registered society with s.44(6) approval',
  'Charitable foundation with donation tax exemption',
  'Islamic relief or zakat body',
  'Any NGO with annual revenue above RM 1M',
];

const CHECK_WITH_LHDN = [
  'Purely religious institution (no s.44 approval)',
  'Grassroots community group below RM 1M',
  'Volunteer-run society with no paid staff',
];

const NgoComplianceChecker = () => (
  <section className="border-b border-slate-100 bg-white py-10 md:py-12">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <h3 className="mb-6 font-montserrat text-lg font-bold text-neutral-950 md:text-xl">
          Is your organisation required to comply?
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Must comply */}
          <div>
            <p className="mb-3 text-sm font-semibold text-green-700">
              Must comply ✓
            </p>
            <ul className="flex flex-col gap-2.5">
              {MUST_COMPLY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-0.5 shrink-0 text-green-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Check with LHDN */}
          <div>
            <p className="mb-3 text-sm font-semibold text-yellow-600">
              Check with LHDN ◦
            </p>
            <ul className="flex flex-col gap-2.5">
              {CHECK_WITH_LHDN.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-0.5 shrink-0 text-yellow-500">◦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 border-t border-slate-100 pt-5 text-sm text-slate-500">
          Not sure?{' '}
          <Link
            href="/contact"
            className="font-medium text-brand-600 hover:underline"
          >
            Book a free 15-minute call
          </Link>{' '}
          — we&apos;ll confirm your compliance obligation at no cost.
        </p>
      </div>
    </div>
  </section>
);

export { NgoComplianceChecker };
