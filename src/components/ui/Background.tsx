import type { ElementType, ReactNode } from 'react';

export type BackgroundVariant =
  | 'blur' // blur-img-bg-1 — hero + footer (dark tinted image)
  | 'blur-alt' // blur-img-bg — secondary blur image
  | 'gradient' // hero-gradient
  | 'white'
  | 'light' // neutral-100
  | 'dark' // neutral-950
  | 'none';

type BackgroundPosition = 'top' | 'center' | 'bottom';

type BackgroundProps = {
  as?: ElementType;
  variant?: BackgroundVariant;
  position?: BackgroundPosition;
  className?: string;
  children: ReactNode;
};

const BASE: Record<BackgroundVariant, string> = {
  blur: "bg-cover bg-no-repeat bg-[url('/assets/background/blur-img-bg-1.png')]",
  'blur-alt':
    "bg-cover bg-no-repeat bg-[url('/assets/background/blur-img-bg.png')]",
  gradient: 'bg-hero-gradient',
  white: 'bg-white',
  light: 'bg-neutral-100',
  dark: 'bg-neutral-950',
  none: '',
};

const POSITION: Record<BackgroundPosition, string> = {
  top: 'bg-[top_center]',
  center: 'bg-center',
  bottom: 'bg-bottom',
};

const isImageVariant = (v: BackgroundVariant) =>
  v === 'blur' || v === 'blur-alt';

const Background = ({
  as: Tag = 'div',
  variant = 'none',
  position = 'center',
  className = '',
  children,
}: BackgroundProps) => (
  <Tag
    className={[
      BASE[variant],
      isImageVariant(variant) ? POSITION[position] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </Tag>
);

export { Background };
