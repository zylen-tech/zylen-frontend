import type { ReactElement } from 'react';

import { Layout } from '../components/layout/Layout';
import { Meta } from '../components/layout/Meta';
import { BookDemo } from '../components/sections/BookDemo';
import { Features } from '../components/sections/Features';
import { PageHero } from '../components/sections/PageHero';
import { Pricing } from '../components/sections/Pricing';
import { Services } from '../components/sections/Services';
import { PAGE_HEROES } from '../constants/content';
import type { NextPageWithLayout } from '../types/next';

const ServicesPage: NextPageWithLayout = () => (
  <>
    <Meta
      title="Services — Zylen E-Invoice Integration"
      description="From standard accounting software to custom ERP — Zylen connects your business to LHDN MyInvois in 7 to 14 days."
    />
    <PageHero
      eyebrow={PAGE_HEROES.services.eyebrow}
      headline={PAGE_HEROES.services.headline}
      description={PAGE_HEROES.services.description}
    />
    <Features />
    <Services />
    <Pricing />
    <BookDemo />
  </>
);

ServicesPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ServicesPage;
