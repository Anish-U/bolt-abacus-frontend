/* eslint-disable no-console */
'use client';

import { FC, useEffect, useState } from 'react';

import InfoSection from '../InfoSection';
import LoadingSection from '../../LoadingSection';
import RoadmapSection from '../RoadmapSection';
import WelcomeSection from '../WelcomeSection';
import { getCookie } from 'cookies-next';

export interface DashboardSectionProps {}

const DashboardSection: FC<DashboardSectionProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentClass, setCurrentClass] = useState(0);
  const [classLink, setClassLink] = useState('www.zoom.com');

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const authToken = getCookie('token');

        const res = await fetch(`http://localhost:3000/api/dashboard/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'AUTH-TOKEN': authToken!,
          },
        });

        const { level, error } = await res.json();

        if (res.status === 200) {
          setCurrentLevel(level.levelId);
          setCurrentClass(level.latestClass);
          setClassLink(level.latestLink);
          setLoading(false);
          return { level };
        } else {
          console.log(error);
        }
      } catch (err) {
        console.log(err);
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
  );
};

export default DashboardSection;
