import type { ReactElement } from 'react';

import { Meta } from '../components/layout/Meta';
import { Hero } from '../components/public/home/Hero';
import { Problem } from '../components/public/home/Problem';
import { Sponsors } from '../components/public/home/Sponsors';
import { BookDemo } from '../components/public/shared/BookDemo';
import { HowItWorks } from '../components/public/shared/HowItWorks';
import { Services } from '../components/public/shared/Services';
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
    <Problem />
    <Sponsors />
    <Services />
    <HowItWorks />
    <BookDemo />
  </>
);

HomePage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default HomePage;
