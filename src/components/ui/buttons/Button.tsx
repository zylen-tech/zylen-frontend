import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'white' | 'outline-white';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'ring-2 ring-brand-500 ring-offset-2 bg-brand-500 text-white hover:bg-brand-600 hover:ring-brand-600',
  secondary:
    'ring-2 ring-brand-300 ring-offset-2 bg-brand-100 text-brand-500 hover:bg-brand-500 hover:text-white hover:ring-brand-500',
  white:
    'ring-2 ring-white ring-offset-2 ring-offset-brand-500 bg-white text-brand-500 hover:bg-white/90',
  'outline-white':
    'ring-2 ring-white/60 ring-offset-2 ring-offset-transparent bg-white/10 text-white hover:bg-white/20 hover:ring-white',
};

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer';

const isExternal = (href: string) =>
  href.startsWith('http') ||
  href.startsWith('//') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:') ||
  href.startsWith('https://wa.me');

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ButtonProps) => {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export { Button };
