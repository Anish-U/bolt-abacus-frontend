import { FC } from 'react';
import LoadingSection from '@/components/organisms/LoadingSection';
import { Metadata } from 'next';

interface LoadingPageProps {}

export const metadata: Metadata = {
  title: 'BoltAbacus',
  description: 'The perfect app to learn and master abacus!',
};

const loadingPage: FC<LoadingPageProps> = ({}) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoadingSection />
    </div>
  );
};

export default loadingPage;
