import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { TeamSection } from '../components/public/about/TeamSection';
import { BookDemo } from '../components/public/shared/BookDemo';
import { PageHero } from '../components/public/shared/PageHero';
import { PAGE_HEROES } from '../constants/content';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const AboutPage: NextPageWithLayout = () => (
  <>
    <Meta
      title="About — Zylen E-Invoice Integration"
      description="A Kuala Lumpur-based software agency dedicated to making Malaysian e-invoice compliance fast, affordable, and stress-free."
    />
    <PageHero
      eyebrow={PAGE_HEROES.about.eyebrow}
      headline={PAGE_HEROES.about.headline}
      description={PAGE_HEROES.about.description}
    />
    <TeamSection />
    <BookDemo />
  </>
);

AboutPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default AboutPage;
