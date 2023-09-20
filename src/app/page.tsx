import Carousel from '@/components/organisms/Carousel';
import CounterSection from '@/components/organisms/CounterSection';
import { FC } from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import NavBar from '@/components/molecules/NavBar';
import PricingSection from '@/components/organisms/PricingSection';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <Carousel />
      <PricingSection />
      <CounterSection />
    </main>
  );
};

export default HomePage;
