import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import LevelSection from '@/components/organisms/Level/LevelSection';
import { Metadata } from 'next';
import NavBar from '@/components/molecules/NavBar';
import { isValidLevelId } from '@/helpers/student';
import { redirect } from 'next/navigation';

interface LevelPageProps {
  params: { id: string };
}

export function generateMetadata({ params }: LevelPageProps): Metadata {
  if (!isValidLevelId(params.id)) {
    return {
      title: `BoltAbacus | Invalid Level`,
    };
  } else {
    return {
      title: `BoltAbacus | Level ${params.id}`,
    };
  }
}

const LevelPage: FC<LevelPageProps> = ({ params }) => {
  if (!isValidLevelId(params.id)) {
    redirect('/student/dashboard');
  }

  const level = parseInt(params.id);

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
