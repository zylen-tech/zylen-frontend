import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { Pricing } from '../components/public/services/Pricing';
import { ProductFeatures } from '../components/public/services/ProductFeatures';
import { BookDemo } from '../components/public/shared/BookDemo';
import { ServicePackages } from '../components/public/shared/ServicePackages';
import { ReusableHero } from '../components/ui/hero';
import { PAGE_HEROES } from '../constants/content';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const ServicesPage: NextPageWithLayout = () => (
  <>
    <Meta
      title="Services — Zylen E-Invoice Integration"
      description="From standard accounting software to custom ERP — Zylen connects your business to LHDN MyInvois in 7 to 14 days."
    />
    <ReusableHero
      eyebrow={PAGE_HEROES.services.eyebrow}
      headline={PAGE_HEROES.services.headline}
      headlineAccent={PAGE_HEROES.services.headlineAccent}
      description={PAGE_HEROES.services.description}
    />
    <ProductFeatures />
    <ServicePackages />
    <Pricing />
    <BookDemo />
  </>
);

ServicesPage.getLayout = (page: ReactElement) => (
  <PublicLayout navVariant="light">{page}</PublicLayout>
);

export default ServicesPage;
