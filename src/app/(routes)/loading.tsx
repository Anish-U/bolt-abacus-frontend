import { FC } from 'react';

interface LoadingPageProps {}

const loadingPage: FC<LoadingPageProps> = ({}) => {
  return (
    <main className="h-screen flex justify-around items-center">
      <h1 className="text-lg font-medium font-sans">Loading...</h1>
    </main>
  );
};

export default loadingPage;
