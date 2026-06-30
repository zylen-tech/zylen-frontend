import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { MissionStatement } from '../components/public/about/MissionStatement';
import { OurValues } from '../components/public/about/OurValues';
import { TeamSection } from '../components/public/about/TeamSection';
import { WhoWeWorkWith } from '../components/public/about/WhoWeWorkWith';
import { BookDemo } from '../components/public/shared/BookDemo';
import { ReusableHero } from '../components/ui/hero';
import { PAGE_HEROES } from '../constants/content';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const AboutPage: NextPageWithLayout = () => (
  <>
    <Meta
      title="About — Zylen E-Invoice Integration"
      description="A Kuala Lumpur-based software agency dedicated to making Malaysian e-invoice compliance fast, affordable, and stress-free."
    />
    <ReusableHero
      eyebrow={PAGE_HEROES.about.eyebrow}
      headline={PAGE_HEROES.about.headline}
      headlineAccent={PAGE_HEROES.about.headlineAccent}
      description={PAGE_HEROES.about.description}
    />
    <MissionStatement />
    <OurValues />
    <TeamSection />
    <WhoWeWorkWith />
    <BookDemo />
  </>
);

AboutPage.getLayout = (page: ReactElement) => (
  <PublicLayout navVariant="light">{page}</PublicLayout>
);

export default AboutPage;
