import { motion } from 'framer-motion';

import { BRAND } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';

const ease = [0.22, 1, 0.36, 1] as const;

const PricingCTA = () => (
  <section
    className="relative overflow-hidden py-24 md:py-32"
    style={{ background: 'linear-gradient(160deg, #020a14 0%, #053959 100%)' }}
  >
    {/* Line grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease }}
        className="text-xs font-semibold uppercase tracking-widest text-white/50"
      >
        Not sure which plan fits?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="mt-4 font-montserrat text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
      >
        Book a Free Consultation.
        <br />
        <span className="text-brand-300">We&rsquo;ll find the right fit.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/55"
      >
        30 minutes. We review your system, invoice volume, and compliance status
        — then recommend the right plan with no pressure to commit.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease }}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <Button href={BRAND.calendly} variant="primary">
          Book a Free Call
        </Button>
        <Button href={BRAND.whatsapp} variant="secondary">
          WhatsApp Us
        </Button>
      </motion.div>
    </div>
  </section>
);

export { PricingCTA };
