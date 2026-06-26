import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'outline-white';
  href?: string;
  onClick?: () => void;
  className?: string;
};

const styles: Record<string, React.CSSProperties> = {
  primary: { background: '#053959', color: '#fff' },
  secondary: {
    border: '1.5px solid #053959',
    color: '#053959',
    background: 'transparent',
  },
  white: { background: '#ffffff', color: '#053959' },
  'outline-white': {
    border: '1.5px solid rgba(255,255,255,0.65)',
    color: '#ffffff',
    background: 'transparent',
  },
};

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ButtonProps) => {
  const base = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${className}`;

  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      el.style.opacity = '0.88';
    } else if (variant === 'white') {
      el.style.opacity = '0.9';
    } else if (variant === 'outline-white') {
      el.style.background = 'rgba(255,255,255,0.12)';
    } else {
      el.style.background = '#053959';
      el.style.color = '#ffffff';
    }
  };

  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      el.style.opacity = '1';
    } else if (variant === 'white') {
      el.style.opacity = '1';
    } else if (variant === 'outline-white') {
      el.style.background = 'transparent';
    } else {
      el.style.background = 'transparent';
      el.style.color = '#053959';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={base}
        style={styles[variant]}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={base}
      style={styles[variant]}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
};

export { Button };
