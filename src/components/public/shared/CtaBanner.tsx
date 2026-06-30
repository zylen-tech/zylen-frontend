import { BRAND } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';

const CtaBanner = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <span className="mb-4 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-500">
        Get Started Today
      </span>

      <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-brand-500 md:text-4xl lg:text-5xl">
        Ready to simplify your
        <br className="hidden sm:block" /> e-invoicing workflow?
      </h2>

      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-500">
        Join hundreds of finance teams already using Zylen to automate
        compliance, cut processing time, and scale without friction.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="/contact" variant="primary">
          Book a Free Call →
        </Button>
        <Button href={BRAND.whatsapp} variant="secondary">
          WhatsApp Us
        </Button>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        No credit card required · Free consultation · No commitment
      </p>
    </div>
  </section>
);

export { CtaBanner };
