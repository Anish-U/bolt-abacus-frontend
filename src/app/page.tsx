import CounterSection from '@/components/organisms/CounterSection';
import CurriculumSection from '@/components/organisms/CurriculumSection';
import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import HeroSection from '@/components/organisms/HeroSection';
import InfoSection from '@/components/organisms/InfoSection';
import { Metadata } from 'next';
import NavBar from '@/components/molecules/NavBar';
import PricingSection from '@/components/organisms/PricingSection';
import TestimonialSection from '@/components/organisms/TestimonialSection';

interface HomePageProps {}

export const metadata: Metadata = {
  title: 'BoltAbacus',
  description: 'The perfect app to learn and master abacus!',
  icons: {
    icon: 'icon.png',
  },
};

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <InfoSection />
      <CurriculumSection />
      <PricingSection />
      <CounterSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default HomePage;
