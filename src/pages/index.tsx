import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { Hero } from '../components/public/home/Hero';
import { PainPoints } from '../components/public/home/PainPoints';
import { SocialProof } from '../components/public/home/SocialProof';
import { BookDemo } from '../components/public/shared/BookDemo';
import { HowItWorks } from '../components/public/shared/HowItWorks';
import { ServicePackages } from '../components/public/shared/ServicePackages';
import { Background } from '../components/ui/Background';
import { AppConfig } from '../config/site.config';
import { PublicLayout } from '../layouts/PublicLayout';
import type { NextPageWithLayout } from '../types/next';

const HomePage: NextPageWithLayout = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background variant="blur" position="top">
      <Hero />
    </Background>
    <PainPoints />
    <SocialProof />
    <ServicePackages />
    <HowItWorks />
    <BookDemo />
  </>
);

HomePage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default HomePage;
