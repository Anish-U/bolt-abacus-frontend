import { FC } from 'react';
import LoadingSection from '@/components/organisms/LoadingSection';

interface LoadingPageProps {}

const loadingPage: FC<LoadingPageProps> = ({}) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoadingSection />
    </div>
  );
};

export default loadingPage;
