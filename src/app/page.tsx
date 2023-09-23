import CounterSection from '@/components/organisms/CounterSection';
import CurriculumSection from '@/components/organisms/CurriculumSection';
import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import HeroSection from '@/components/organisms/HeroSection';
import InfoSection from '@/components/organisms/InfoSection';
import NavBar from '@/components/molecules/NavBar';
import PricingSection from '@/components/organisms/PricingSection';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <InfoSection />
      <CurriculumSection />
      <PricingSection />
      <CounterSection />
      <Footer />
    </main>
  );
};

export default HomePage;
