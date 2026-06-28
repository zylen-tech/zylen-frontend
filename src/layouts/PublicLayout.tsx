import type { ReactNode } from 'react';

import { Footer } from '../components/layout/Footer';
import { PublicNavbar } from '../components/navbar';

type PublicLayoutProps = {
  children: ReactNode;
  navVariant?: 'dark' | 'light';
};

const PublicLayout = ({ children, navVariant = 'dark' }: PublicLayoutProps) => (
  <div className="antialiased">
    <PublicNavbar variant={navVariant} />
    <main>{children}</main>
    <div className="px-5 pb-5">
      <Footer />
    </div>
  </div>
);

export { PublicLayout };
