'use client';

import { FC, useEffect, useState } from 'react';

import ErrorBox from '@/components/molecules/ErrorBox';
import InfoSection from '../InfoSection';
import LoadingSection from '../../LoadingSection';
import RoadmapSection from '../RoadmapSection';
import WelcomeSection from '../WelcomeSection';
import { getCookie } from 'cookies-next';
import { getErrorMessage } from '@/helpers/error';

export interface DashboardSectionProps {}

const DashboardSection: FC<DashboardSectionProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [fallBackLink, setFallBackLink] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentClass, setCurrentClass] = useState(0);
  const [classLink, setClassLink] = useState('www.zoom.com');

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const authToken = getCookie('token');
        const user = getCookie('user');

        if (!authToken || !user) {
          setFallBackLink(true);
          throw new Error('Please Login to view this page');
        }

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
          setLoading(false);
          return { level };
        } else {
          setError(err?.error);
          setLoading(false);
        }
      } catch (err) {
        setError(getErrorMessage(err));
        setLoading(false);
      }
    };
    getDashboardData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {error ? (
            <ErrorBox
              errorMessage={error || 'Something went wrong'}
              link={fallBackLink ? '/login' : '/student/dashboard'}
              buttonText={fallBackLink ? 'Login Now' : 'Go Back'}
            />
          ) : (
            <>
              <WelcomeSection classLink={classLink} />
              <InfoSection
                currentLevel={currentLevel}
                description={`Class ${currentClass}`}
                progress={50}
              />
              <RoadmapSection
                currentLevel={currentLevel}
                currentClass={currentClass}
                progress={10}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default DashboardSection;
