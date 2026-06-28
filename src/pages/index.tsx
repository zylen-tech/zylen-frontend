import type { ReactElement } from 'react';

import { Layout } from '../components/layout/Layout';
import { Meta } from '../components/layout/Meta';
import { BookDemo } from '../components/sections/BookDemo';
import { Hero } from '../components/sections/Hero';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Problem } from '../components/sections/Problem';
import { Services } from '../components/sections/Services';
import { Sponsors } from '../components/sections/Sponsors';
import { Background } from '../components/ui/Background';
import { AppConfig } from '../config/site.config';
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

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default HomePage;
