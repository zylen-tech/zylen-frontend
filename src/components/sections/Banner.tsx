import Link from 'next/link';

const Banner = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <span
        className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
        style={{
          background: 'rgba(26,127,191,0.10)',
          color: '#1a7fbf',
          border: '1px solid rgba(26,127,191,0.20)',
        }}
      >
        Get Started Today
      </span>

      <h2
        className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl lg:text-5xl"
        style={{ color: '#053959', lineHeight: 1.15, letterSpacing: '-0.02em' }}
      >
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
          className="rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #1a7fbf 0%, #0f5a8c 100%)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 8px 32px rgba(26,127,191,0.40)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          Start Free Trial →
        </Link>
        <Link
          href="#contact"
          className="rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-200"
          style={{ border: '1.5px solid #cbd5e0', color: '#4a5568' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#053959';
            (e.currentTarget as HTMLElement).style.color = '#053959';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#cbd5e0';
            (e.currentTarget as HTMLElement).style.color = '#4a5568';
          }}
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
