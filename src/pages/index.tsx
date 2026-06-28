import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Meta } from '../components/layout/Meta';
import { About } from '../components/sections/About';
import { BookDemo } from '../components/sections/BookDemo';
import { Hero } from '../components/sections/Hero';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Pricing } from '../components/sections/Pricing';
import { Problem } from '../components/sections/Problem';
import { Services } from '../components/sections/Services';
import { Background } from '../components/ui/Background';
import { AppConfig } from '../config/site.config';

const HomePage = () => (
  <div className="px-5 py-6 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background
      variant="blur"
      position="top"
      className="relative z-10 overflow-hidden rounded-xl"
    >
      <Header />
      <Hero />
    </Background>
    <main>
      <Problem />
      <Services />
      <HowItWorks />
      <Pricing />
      <About />
      <BookDemo />
    </main>
    <Footer />
  </div>
);

export default HomePage;
