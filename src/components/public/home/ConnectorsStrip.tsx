import Link from 'next/link';

import { CONNECTORS } from '../../../constants/content';
import { FadeIn } from '../../ui/FadeIn';

const ConnectorsStrip = () => (
  <section className="border-y border-gray-100 bg-white py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <FadeIn>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          {CONNECTORS.eyebrow}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {CONNECTORS.items.map((item) => (
            <span
              key={item.name}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-brand-500"
            >
              {item.name}
            </span>
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-gray-500">
          {CONNECTORS.fallback}{' '}
          <Link
            href={CONNECTORS.fallbackCta.href}
            className="font-semibold text-brand-500 underline-offset-2 hover:underline"
          >
            {CONNECTORS.fallbackCta.label} →
          </Link>
        </p>
      </FadeIn>
    </div>
  </section>
);

export { ConnectorsStrip };
