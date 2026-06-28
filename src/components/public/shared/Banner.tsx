import Link from 'next/link';

const Banner = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <span className="mb-4 inline-block rounded-full border border-[rgba(26,127,191,0.20)] bg-[rgba(26,127,191,0.10)] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1a7fbf]">
        Get Started Today
      </span>

      <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-primary-500 md:text-4xl lg:text-5xl">
        Ready to simplify your
        <br className="hidden sm:block" /> e-invoicing workflow?
      </h2>

      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-500">
        Join hundreds of finance teams already using Zylen to automate
        compliance, cut processing time, and scale without friction.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="#get-started"
          className="rounded-full bg-gradient-to-br from-[#1a7fbf] to-[#0f5a8c] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,127,191,0.40)]"
        >
          Start Free Trial →
        </Link>
        <Link
          href="#contact"
          className="rounded-full border-[1.5px] border-[#cbd5e0] px-8 py-3.5 text-sm font-medium text-[#4a5568] transition-all duration-200 hover:border-primary-500 hover:text-primary-500"
        >
          Talk to Sales
        </Link>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        No credit card required · 14-day free trial · Cancel anytime
      </p>
    </div>
  </section>
);

export { Banner };
