import type { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="antialiased">
    <Header />
    <main>{children}</main>
    <div className="px-5 pb-5">
      <Footer />
    </div>
  </div>
);

export { Layout };
