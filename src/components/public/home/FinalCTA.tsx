import { BRAND, FINAL_CTA } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { FadeIn } from '../../ui/FadeIn';
import { SectionHeading } from '../../ui/SectionHeading';

const FinalCTA = () => (
  <section className="bg-hero-gradient py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <SectionHeading
        eyebrow={FINAL_CTA.eyebrow}
        headline={FINAL_CTA.headline}
        subtext={FINAL_CTA.subtext}
        light
      />

      <FadeIn delay={0.5}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={FINAL_CTA.ctaHref} variant="white">
            {FINAL_CTA.cta}
          </Button>
          <Button href={BRAND.whatsapp} variant="outline-white">
            WhatsApp Us
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.65}>
        <p className="mt-6 text-xs text-white/45">{FINAL_CTA.note}</p>
      </FadeIn>
    </div>
  </section>
);

export { FinalCTA };
