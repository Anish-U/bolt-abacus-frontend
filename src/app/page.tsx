import Carousel from '@/components/organisms/Carousel';
import { FC } from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import NavBar from '@/components/molecules/NavBar';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <Carousel />
    </main>
  );
};

export default HomePage;
