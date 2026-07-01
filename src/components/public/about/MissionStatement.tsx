import { motion } from 'framer-motion';

import { ABOUT_MISSION } from '../../../constants/content';

const ease = [0.22, 1, 0.36, 1] as const;

const MissionStatement = () => (
  <section className="bg-white py-16 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease }}
          className="text-xs font-semibold uppercase tracking-widest text-slate-400"
        >
          {ABOUT_MISSION.eyebrow}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-8 font-montserrat text-2xl font-bold leading-snug tracking-tight text-neutral-950 sm:text-3xl md:text-[2rem]"
        >
          &ldquo;{ABOUT_MISSION.quote}&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mx-auto my-8 h-px w-16 origin-left bg-brand-300"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.35, ease }}
          className="text-base leading-relaxed text-slate-500 md:text-lg"
        >
          {ABOUT_MISSION.body}
        </motion.p>
      </div>
    </div>
  </section>
);

export { MissionStatement };
