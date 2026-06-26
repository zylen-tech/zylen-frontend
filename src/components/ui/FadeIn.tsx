import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FadeIn = ({
  children,
  delay = 0,
  className,
  direction = 'up',
}: FadeInProps) => {
  const y = direction === 'up' ? 24 : 0;
  const xMap: Record<string, number> = { left: 24, right: -24, up: 0, none: 0 };
  const x = xMap[direction] ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { FadeIn };
