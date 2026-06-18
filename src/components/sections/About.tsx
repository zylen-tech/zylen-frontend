import { motion } from 'framer-motion';

import { ABOUT } from '../../constants/content';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn className="mb-6 text-center">
        <SectionHeading eyebrow={ABOUT.eyebrow} headline={ABOUT.headline} />
      </FadeIn>

      <FadeIn delay={0.1}>
        <p
          className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          {ABOUT.body}
        </p>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-3">
        {ABOUT.team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center rounded-xl border p-8 text-center"
            style={{ background: '#ffffff', borderColor: '#E2E8F0' }}
          >
            <div
              className="mb-4 flex size-20 items-center justify-center rounded-full text-2xl font-extrabold text-white"
              style={{
                background: '#053959',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              {member.name.charAt(0)}
            </div>
            <h4
              className="text-base font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#053959' }}
            >
              {member.name}
            </h4>
            <p
              className="mt-1 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#6B7280' }}
            >
              {member.role}
            </p>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: '#334155' }}
            >
              {member.bio}
            </p>
            <a
              href={member.linkedin}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity duration-150 hover:opacity-70"
              style={{ color: '#053959' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#053959">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { About };
