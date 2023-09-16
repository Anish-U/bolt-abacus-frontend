import { FC } from 'react';
import NavBar from '@/components/molecules/NavBar';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <h1 className="text-lg font-medium font-sans">Home Page</h1>
    </main>
  );
};

export default HomePage;
