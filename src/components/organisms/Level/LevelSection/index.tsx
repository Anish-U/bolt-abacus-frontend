'use client';

import { FC, useEffect, useState } from 'react';

import ClassAccordion from '@/components/molecules/ClassAccordion';
import LoadingSection from '../../LoadingSection';

export interface LevelSectionProps {
  level: number;
}

const LevelSection: FC<LevelSectionProps> = ({ level }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLevelData = async () => {
      try {
        // TODO: Add Server call
        setLoading(false);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };
    getLevelData();
  });

  return (
    <>
      {loading ? (
        <LoadingSection />
      ) : (
        <div className="flex flex-col gap-4 p-6 justify-evenly tablet:justify-between tablet:items-center tablet:p-10 tablet:gap-8 desktop:p-20">
          {level}
          <ClassAccordion type="completed" classNumber={1} />
          <ClassAccordion type="inprogress" classNumber={2} progress={51} />
          <ClassAccordion type="locked" classNumber={3} />
        </div>
      )}
    </>
  );
};

export default LevelSection;
