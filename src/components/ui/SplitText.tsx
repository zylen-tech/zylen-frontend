import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = (stagger = 0.055, delayStart = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delayStart,
    },
  },
});

const word = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

type SplitTextProps = {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  justify?: 'center' | 'flex-start' | 'flex-end';
};

const SplitText = ({
  text,
  as: Tag = 'h2',
  className = '',
  stagger = 0.055,
  delay = 0,
  once = true,
  justify = 'center',
}: SplitTextProps) => {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.h2;

  return (
    <MotionTag
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: justify,
        gap: '0.25em',
      }}
    >
      {text.split(' ').map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          style={{ display: 'inline-block', willChange: 'transform' }}
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export { SplitText };
