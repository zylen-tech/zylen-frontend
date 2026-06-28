import type { ReactElement } from 'react';

import { Layout } from '../components/layout/Layout';
import { Meta } from '../components/layout/Meta';
import { About } from '../components/sections/About';
import { BookDemo } from '../components/sections/BookDemo';
import { PageHero } from '../components/sections/PageHero';
import { PAGE_HEROES } from '../constants/content';
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
    <About />
    <BookDemo />
  </>
);

AboutPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default AboutPage;
