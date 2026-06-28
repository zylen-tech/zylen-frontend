import type { ReactNode } from 'react';

import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => (
  <div className="antialiased">
    <Header />
    <main>{children}</main>
    <div className="px-5 pb-5">
      <Footer />
    </div>
  </div>
);

export { PublicLayout };
