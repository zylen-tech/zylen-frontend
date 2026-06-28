import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { Features } from '../components/public/services/Features';
import { Pricing } from '../components/public/services/Pricing';
import { BookDemo } from '../components/public/shared/BookDemo';
import { PageHero } from '../components/public/shared/PageHero';
import { Services } from '../components/public/shared/Services';
import { PAGE_HEROES } from '../constants/content';
import { PublicLayout } from '../layouts/PublicLayout';
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

ServicesPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default ServicesPage;
