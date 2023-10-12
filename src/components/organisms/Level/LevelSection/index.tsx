'use client';

import ClassAccordion, {
  ClassProgressSchema,
  ClassSchema,
} from '@/components/molecules/ClassAccordion';
import { FC, ReactNode, useEffect, useState } from 'react';

import ErrorBox from '@/components/molecules/ErrorBox';
import LoadingSection from '../../LoadingSection';
import { getCookie } from 'cookies-next';
import { getErrorMessage } from '@/helpers/error';

export interface LevelSectionProps {
  level: number;
}

const LevelSection: FC<LevelSectionProps> = ({ level }) => {
  const [loading, setLoading] = useState(true);
  const [fallBackLink, setFallBackLink] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLatestLevel, setIsLatestLevel] = useState<boolean>(false);
  const [levelSchema, setLevelSchema] = useState<Array<ClassSchema>>();
  const [latestClass, setLatestClass] = useState<number>();
  const [classProgress, setClassProgress] =
    useState<Array<ClassProgressSchema>>();

  useEffect(() => {
    const getLevelData = async () => {
      try {
        const authToken = getCookie('token');
        const user = getCookie('user');

        if (!authToken || !user) {
          setFallBackLink(true);
          throw new Error('Please Login to view this page');
        }

        const res = await fetch(`/api/level/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'AUTH-TOKEN': authToken!,
          },
          body: JSON.stringify({
            levelId: level,
          }),
        });

        const { data, error: err } = await res.json();

        if (res.status === 200) {
          setLevelSchema(data?.schema);
          setIsLatestLevel(data?.isLatestLevel);
          setLatestClass(data?.latestClass);
          setClassProgress(data?.progress);
          setLoading(false);
        } else {
          setError(err?.error);
          setLoading(false);
        }
      } catch (err) {
        setError(getErrorMessage(err));
        setLoading(false);
      }
    };
    getLevelData();
  }, [level]);

  const createClassAccordions = (
    schema: Array<ClassSchema>,
    latestLevel: boolean,
    progress: Array<ClassProgressSchema>
  ) => {
    const classAccordions: Array<ReactNode> = [];
    let foundLatestClass = false;
    schema?.map((classSchema, index) => {
      if (!latestLevel) {
        classAccordions.push(
          <ClassAccordion
            key={classSchema.classId}
            levelId={level}
            classNumber={index + 1}
            type="completed"
            classSchema={classSchema}
          />
        );
      } else if (latestClass && foundLatestClass) {
        classAccordions.push(
          <ClassAccordion
            key={classSchema.classId}
            levelId={level}
            classNumber={index + 1}
            type="locked"
            classSchema={classSchema}
          />
        );
      } else if (latestClass && classSchema.classId === latestClass) {
        foundLatestClass = true;
        classAccordions.push(
          <ClassAccordion
            key={classSchema.classId}
            levelId={level}
            classNumber={index + 1}
            type="inprogress"
            progress={progress}
            classSchema={classSchema}
          />
        );
      } else if (latestClass) {
        classAccordions.push(
          <ClassAccordion
            key={classSchema.classId}
            levelId={level}
            classNumber={index + 1}
            type="completed"
            classSchema={classSchema}
          />
        );
      }
    });
    return classAccordions;
  };
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
            <div className="flex flex-col gap-4 p-6 justify-evenly tablet:justify-between tablet:items-center tablet:p-10 tablet:gap-8 desktop:p-20">
              {createClassAccordions(
                levelSchema!,
                isLatestLevel,
                classProgress!
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default LevelSection;
