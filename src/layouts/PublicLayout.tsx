import type { ReactNode } from 'react';

import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/navbar';

type PublicLayoutProps = {
  children: ReactNode;
  navVariant?: 'dark' | 'light';
};

const PublicLayout = ({ children, navVariant = 'dark' }: PublicLayoutProps) => (
  <div className="relative antialiased">
    <Navbar variant={navVariant} />
    <main>{children}</main>
    <div className="px-5 pb-5">
      <Footer />
    </div>
  </div>
);

export { PublicLayout };
