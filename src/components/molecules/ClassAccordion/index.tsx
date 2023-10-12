'use client';

import { FC, ReactNode, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import AccordionButton from '@/components/atoms/AccordionButton';
import Button from '@/components/atoms/Button';
import ClassAccordionRow from '../ClassAccordionRow';
import { Collapse } from 'react-collapse';
import Link from 'next/link';
import ProgressBar from '@/components/atoms/ProgressBar';
import { TbReport } from 'react-icons/tb';
import styles from './index.module.css';

export interface ClassProgressSchema {
  topicId: number;
  QuizType: string;
  isPass: boolean;
}

export interface ClassSchema {
  classId: number;
  topicIds: Array<number>;
}

export interface ClassAccordionProps {
  type: 'completed' | 'inprogress' | 'locked';
  levelId: number;
  classNumber: number;
  classSchema: ClassSchema;
  progress?: Array<ClassProgressSchema>;
}

const createAccordionRows = (
  levelId: number,
  classSchema: ClassSchema,
  progress: Array<ClassProgressSchema>
) => {
  const accordionRows: Array<ReactNode> = [];
  for (let i = 0; i < classSchema.topicIds.length; i++) {
    const topicId = classSchema.topicIds[i];

    const classwork = progress?.find(
      (quiz) => quiz.QuizType === 'Classwork' && quiz.topicId === topicId
    );
    const homework = progress?.find(
      (quiz) => quiz.QuizType === 'HomeWork' && quiz.topicId === topicId
    );

    if (!progress) {
      accordionRows.push(
        <ClassAccordionRow
          classwork={'green'}
          homework={'green'}
          text={`Topic ${i + 1}`}
          link={`/student/quiz/${levelId}/${classSchema.classId}/${topicId}`}
        />
      );
    } else {
      accordionRows.push(
        <ClassAccordionRow
          classwork={
            classwork ? (classwork.isPass ? 'green' : 'yellow') : 'grey'
          }
          homework={homework ? (homework.isPass ? 'green' : 'yellow') : 'grey'}
          text={`Topic ${i + 1}`}
          link={`/student/quiz/${levelId}/${classSchema.classId}/${topicId}`}
        />
      );
    }
  }
  return accordionRows;
};

const ClassAccordion: FC<ClassAccordionProps> = ({
  type,
  classSchema,
  levelId,
  classNumber,
  progress,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.classAccordion} relative p-6 border border-lightGold w-full rounded-lg`}
    >
      <div className="flex flex-col gap-5 tablet:flex-row tablet:gap-10">
        <div className="flex flex-col flex-1 gap-5 tablet:flex-row tablet:gap-10 tablet:justify-center tablet:items-center">
          <p className="text-lg font-medium">Class {classNumber}</p>
          <div className="flex items-center justify-center flex-1">
            {type === 'completed' && (
              <ProgressBar percentage={100} type={'blue'} />
            )}

            {type === 'inprogress' && progress && (
              <ProgressBar
                percentage={
                  (progress.length / (classSchema.topicIds.length * 2)) * 100
                }
                type={'purple'}
                isBgBlack={true}
              />
            )}
            {type === 'locked' && (
              <ProgressBar percentage={0} type={'locked'} isBgBlack={true} />
            )}
          </div>
        </div>
        <div className="flex flex-1 gap-6">
          <div className="flex-1">
            {type === 'completed' && (
              <Button type={'black'} text={'Finished'} />
            )}
            {type === 'inprogress' && (
              <Button type={'primary'} text={`Let's Go !`} />
            )}
          </div>
          <div className="flex-1">
            {type !== 'locked' && (
              <Link
                href={`/student/report?level=${levelId}&class=${classSchema.classId}`}
              >
                <Button type={'blackWhite'} text={'Finished'}>
                  <div className="flex items-center justify-center gap-2">
                    <TbReport className="text-lg" />
                    <p>Report</p>
                  </div>
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div
          className={`absolute flex items-center justify-center right-6 top-6 tablet:relative tablet:right-0 tablet:top-0 ${
            type === 'locked' ? 'opacity-0' : 'cursor-pointer'
          }`}
        >
          {isOpen ? (
            <FaAngleUp className="text-lg" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <FaAngleDown
              className="text-lg"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {type !== 'locked' && (
        <Collapse isOpened={isOpen}>
          <div className="pt-6">
            <hr className="border border-darkGrey" />
            <div className="flex flex-col gap-4 pt-4 pb-0 tablet:p-4 tablet:flex-row">
              <div className="flex flex-col flex-1 gap-4">
                <ClassAccordionRow
                  classwork="grey"
                  homework="grey"
                  text="Summary"
                />
                {createAccordionRows(levelId, classSchema, progress!)}
              </div>
              <div className="mt-4 tablet:mt-0">
                {/* TODO: Add test button details after API changes */}
                <AccordionButton
                  type="grey"
                  text={'Test'}
                  link={`/student/test/${levelId}/${classSchema.classId}`}
                  // disabled={true}
                />
              </div>
            </div>
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default ClassAccordion;
