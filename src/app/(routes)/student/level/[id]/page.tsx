import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import LevelSection from '@/components/organisms/Level/LevelSection';
import { Metadata } from 'next';
import NavBar from '@/components/molecules/NavBar';
import { redirect } from 'next/navigation';

interface LevelPageProps {
  params: { id: string };
}

export function generateMetadata({ params }: LevelPageProps): Metadata {
  const level = parseInt(params.id);
  if (isNaN(level) || level > 10 || level < 0) {
    return {
      title: `BoltAbacus | Invalid Level`,
    };
  } else {
    return {
      title: `BoltAbacus | Level ${level}`,
    };
  }
}

const LevelPage: FC<LevelPageProps> = ({ params }) => {
  const level = parseInt(params.id);
  // eslint-disable-next-line no-console
  console.log('Level Page Hit:', params.id);

  if (isNaN(level) || level > 10 || level < 0) {
    redirect('/student/dashboard');
  }

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <LevelSection level={level} />
      </div>
      <Footer />
    </main>
  );
};

export default LevelPage;
