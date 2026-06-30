import { motion } from 'framer-motion';

import { ABOUT } from '../../../constants/content';
import { SectionHeading } from '../../ui/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TeamSection = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32">
    <div className="relative mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-16 text-center">
        <SectionHeading eyebrow="The People" headline="The Team Behind Zylen" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ABOUT.team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="flex flex-col items-center rounded-[20px] border border-slate-200 bg-slate-50 p-8 text-center"
          >
            {/* Avatar with glow ring */}
            <div
              className="mb-6 flex size-20 items-center justify-center rounded-full font-montserrat text-2xl font-extrabold text-white"
              style={{
                background: 'linear-gradient(135deg, #1d6fa4, #053959)',
                boxShadow:
                  '0 0 0 3px rgba(74,158,255,0.35), 0 0 20px rgba(74,158,255,0.2)',
              }}
            >
              {member.initials}
            </div>

            <h3 className="font-montserrat text-lg font-bold text-slate-900 md:text-xl">
              {member.name}
            </h3>

            <p className="mt-1 text-base font-medium italic text-brand-500">
              {member.role}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {member.tagline}
            </p>

            <div className="my-5 h-px w-12 bg-slate-200" />

            <p className="text-sm leading-relaxed text-slate-500">
              {member.bio}
            </p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-1.5 text-xs font-semibold text-brand-500 transition-colors duration-200 hover:bg-brand-50"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { TeamSection };
