/* eslint-disable no-console */

import DashboardSection from '@/components/organisms/Dashboard/DashboardSection';
import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import NavBar from '@/components/molecules/NavBar';

interface DashboardPageProps {}

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
