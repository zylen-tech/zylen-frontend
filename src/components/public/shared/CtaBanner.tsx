import { BRAND } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { FadeIn } from '../../ui/FadeIn';
import { SectionHeading } from '../../ui/SectionHeading';

const CtaBanner = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <SectionHeading
        eyebrow="The Deadline Is Real"
        headline="Ready to Be Compliant Before 1 January 2027?"
        subtext="Book a free call — we review your setup, confirm the integration path, and deliver a fixed-price proposal within 24 hours. No commitment required."
      />

      <FadeIn delay={0.5}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Book a Free Call →
          </Button>
          <Button href={BRAND.whatsapp} variant="secondary">
            WhatsApp Us
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.65}>
        <p className="mt-6 text-xs text-gray-400">
          Fixed-price proposal within 24 hours · Source code yours · No
          long-term contracts
        </p>
      </FadeIn>
    </div>
  </section>
);

export { CtaBanner };
