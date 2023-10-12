import DashboardSection from '@/components/organisms/Dashboard/DashboardSection';
import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import { Metadata } from 'next';
import NavBar from '@/components/molecules/NavBar';

interface DashboardPageProps {}

export const metadata: Metadata = {
  title: 'BoltAbacus | Dashboard',
  description: 'The perfect app to learn and master abacus!',
};

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <DashboardSection />
      <Footer />
    </main>
  );
};

export default DashboardPage;
