import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import InfoSection from '@/components/organisms/Dashboard/InfoSection';
import NavBar from '@/components/molecules/NavBar';
import RoadmapSection from '@/components/organisms/Dashboard/RoadmapSection';
import WelcomeSection from '@/components/organisms/Dashboard/WelcomeSection';

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  return (
    <main className="">
      <NavBar />
      <WelcomeSection
        name={'Ummenthala Anish'}
        classLink={'https://www.zoom.com'}
      />
      <InfoSection currentLevel={3} description={'Test Mode'} progress={50} />
      <RoadmapSection />
      <Footer />
    </main>
  );
};

export default DashboardPage;
