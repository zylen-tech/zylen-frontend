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
  primary: 'bg-primary-500 text-white hover:opacity-90',
  secondary:
    'border-[1.5px] border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  white: 'bg-white text-primary-500 hover:opacity-90',
  'outline-white':
    'border-[1.5px] border-white/[0.65] text-white hover:bg-white/10',
};

const base =
  'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer';

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
