import type { ReactNode } from 'react';

import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/navbar';
import { WhatsAppFloat } from '../components/ui/WhatsAppFloat';

type PublicLayoutProps = {
  children: ReactNode;
  navVariant?: 'dark' | 'light';
};

const PublicLayout = ({ children, navVariant = 'dark' }: PublicLayoutProps) => (
  <div className="relative antialiased">
    <Navbar variant={navVariant} />
    <main>{children}</main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export { PublicLayout };
