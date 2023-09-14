import { FC } from 'react';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="h-screen flex justify-around items-center">
      <h1 className="text-lg font-medium font-sans">Home Page</h1>
    </main>
  );
};

export default HomePage;
