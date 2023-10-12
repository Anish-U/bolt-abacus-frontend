import { FC } from 'react';
import LoadingSection from '@/components/organisms/LoadingSection';
import { Metadata } from 'next';

interface LoadingPageProps {}

export const metadata: Metadata = {
  title: 'BoltAbacus | Dashboard',
  description: 'The perfect app to learn and master abacus!',
};

const loadingPage: FC<LoadingPageProps> = ({}) => {
  return <LoadingSection />;
};

export default loadingPage;
