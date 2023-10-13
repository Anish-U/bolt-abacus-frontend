'use client';

import { FC, useEffect, useState } from 'react';

import ErrorBox from '@/components/molecules/ErrorBox';
import InfoSection from '../InfoSection';
import IsAuthStudent from '@/hoc/withStudentAuth';
import LoadingSection from '../../LoadingSection';
import RoadmapSection from '../RoadmapSection';
import WelcomeSection from '../WelcomeSection';
import { getCookie } from 'cookies-next';

export interface DashboardSectionProps {}

const DashboardSection: FC<DashboardSectionProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [fallBackLink, setFallBackLink] = useState<string>('/');
  const [error, setError] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [currentClass, setCurrentClass] = useState<number>(0);
  const [classLink, setClassLink] = useState<string>('https://zoom.com');

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const authToken = getCookie('token');

        const res = await fetch(`/api/dashboard/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'AUTH-TOKEN': authToken!,
          },
        });

        const { level, error: err } = await res.json();

        if (res.status === 200) {
          setCurrentLevel(level.levelId);
          setCurrentClass(level.latestClass);
          setClassLink(level.latestLink);
        } else if (res.status === 401 || res.status === 403) {
          setError(err?.error);
          setFallBackLink('/login');
        } else {
          setError(err?.error);
        }
      } catch (err) {
        setError('Something went wrong. Please try again');
      } finally {
        setLoading(false);
      }
    };
    getDashboardData();
  });

  return (
    <>
      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {error ? (
            <ErrorBox
              errorMessage={error}
              link={fallBackLink!}
              buttonText={fallBackLink === '/login' ? 'Login Now' : 'Try Again'}
            />
          ) : (
            <>
              <WelcomeSection classLink={classLink!} />
              <InfoSection
                currentLevel={currentLevel!}
                description={`Class ${currentClass!}`}
                progress={50}
              />
              <RoadmapSection
                currentLevel={currentLevel!}
                currentClass={currentClass!}
                progress={10}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default IsAuthStudent(DashboardSection);
