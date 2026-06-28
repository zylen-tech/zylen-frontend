import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { TeamSection } from '../components/public/about/TeamSection';
import { BookDemo } from '../components/public/shared/BookDemo';
import { Button } from '../components/ui/Button';
import { ReusableHero } from '../components/ui/hero';
import { BRAND, PAGE_HEROES } from '../constants/content';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const AboutPage: NextPageWithLayout = () => (
  <>
    <Meta
      title="About — Zylen E-Invoice Integration"
      description="A Kuala Lumpur-based software agency dedicated to making Malaysian e-invoice compliance fast, affordable, and stress-free."
    />
    <ReusableHero
      headline="Built by Engineers,"
      headlineAccent="Focused on Your Compliance."
      description={PAGE_HEROES.about.description}
      actions={
        <>
          <Button href="/contact" variant="primary">
            Book a Free Call
          </Button>
          <Button href={BRAND.whatsapp} variant="secondary">
            WhatsApp Us
          </Button>
        </>
      }
    />
    <TeamSection />
    <BookDemo />
  </>
);

AboutPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default AboutPage;
