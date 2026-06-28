import { BRAND, FINAL_CTA } from '../../../constants/content';
import { Button } from '../../ui/Button';
import { FadeIn } from '../../ui/FadeIn';

const FinalCTA = () => (
  <section className="bg-primary-900 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <FadeIn>
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
          {FINAL_CTA.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 max-w-2xl font-montserrat text-4xl font-extrabold leading-tight tracking-[-0.025em] text-white md:text-5xl">
          {FINAL_CTA.headline}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
          {FINAL_CTA.subtext}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={FINAL_CTA.ctaHref} variant="white">
            {FINAL_CTA.cta}
          </Button>
          <Button href={BRAND.whatsapp} variant="outline-white">
            WhatsApp Us
          </Button>
        </div>

        <p className="mt-6 text-xs text-white/45">{FINAL_CTA.note}</p>
      </FadeIn>
    </div>
  </section>
);

export { FinalCTA };
