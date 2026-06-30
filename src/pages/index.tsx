import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { ComparisonSection } from '../components/public/home/ComparisonSection';
import { ConnectorsStrip } from '../components/public/home/ConnectorsStrip';
import { DeliveryModels } from '../components/public/home/DeliveryModels';
import { FinalCTA } from '../components/public/home/FinalCTA';
import { HeroSection } from '../components/public/home/HeroSection';
import { ProblemStrip } from '../components/public/home/ProblemStrip';
import { TrustStrip } from '../components/public/home/TrustStrip';
import { WhyZylen } from '../components/public/home/WhyZylen';
import { HowItWorks } from '../components/public/shared/HowItWorks';
import { AppConfig } from '../config/site.config';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const HomePage: NextPageWithLayout = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HeroSection />
    <ProblemStrip />
    <WhyZylen />
    <ComparisonSection />
    <HowItWorks />
    <DeliveryModels />
    <ConnectorsStrip />
    <FinalCTA />
    <TrustStrip />
  </>
);

HomePage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default HomePage;
