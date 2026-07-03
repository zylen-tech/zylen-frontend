import type { IconType } from 'react-icons';

interface UrgencyCalloutProps {
  Icon: IconType;
  headline: string;
  body: string;
}

const UrgencyCallout = ({ Icon, headline, body }: UrgencyCalloutProps) => (
  <section className="bg-neutral-50 pb-4 pt-0">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="rounded-2xl border border-l-4 border-slate-200 border-l-brand-600 bg-white p-6">
        <div className="flex items-start gap-4">
          <Icon size={22} className="mt-0.5 shrink-0 text-yellow-500" />
          <div>
            <p className="font-semibold leading-snug text-neutral-950">
              {headline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { UrgencyCallout };
