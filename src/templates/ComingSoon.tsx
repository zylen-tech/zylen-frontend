import { motion } from 'framer-motion';
import Image from 'next/image';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

const ComingSoon = () => (
  <div
    className="rounded-3xl"
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background:
        'radial-gradient(ellipse at 50% 0%, rgba(26,127,191,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(76,29,122,0.25) 0%, transparent 55%), #021724',
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    {/* Header */}
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
        }}
      >
        <Image
          src="/assets/brand/logo/white_icon-bg.png"
          alt="Zylen icon"
          width={40}
          height={40}
          style={{ height: '2.5rem', width: 'auto', objectFit: 'contain' }}
          priority
        />
        <div
          style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}
        >
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: '1.125rem',
              letterSpacing: '-0.01em',
              color: '#ffffff',
            }}
          >
            ZYLEN
          </span>
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '0.5rem',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '0.2rem',
            }}
          >
            E-INVOICE INTEGRATION SERVICE
          </span>
        </div>
      </div>
    </motion.header>

    {/* Main */}
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            marginBottom: '2rem',
            color: 'rgba(255,255,255,0.85)',
            cursor: 'default',
          }}
        >
          <span>🇲🇾</span>
          <span>Coming Soon · LHDN MyInvois Compliant</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            maxWidth: '720px',
            margin: '0 0 1.25rem',
            color: '#ffffff',
          }}
        >
          E-Invoice Compliance,{' '}
          <span style={{ color: '#4FC3F7' }}>Ready in 7 Days</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          style={{
            maxWidth: '520px',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            margin: '0 0 2.5rem',
          }}
        >
          Zylen Connect — our self-serve MyInvois middleware — is launching
          soon. Be first to know and get early-access pricing.
        </motion.p>

        {/* Trust items */}
        <motion.div
          variants={fadeIn}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem 1.75rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {[
            'MyInvois Ready',
            'LHDN Certified Integration',
            '7–14 Day Delivery',
            'No Hidden Fees',
          ].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.55 + i * 0.08,
                ease: EASE,
              }}
              whileHover={{ color: '#ffffff', x: 2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                cursor: 'default',
                transition: 'color 0.2s ease',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.12)" />
                <path
                  d="M3.5 7l2.5 2.5 4.5-4.5"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </main>
  </div>
);

export { ComingSoon };
