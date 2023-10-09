'use client';

import { FC, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import AccordionButton from '@/components/atoms/AccordionButton';
import Button from '@/components/atoms/Button';
import ClassAccordionRow from '../ClassAccordionRow';
import { Collapse } from 'react-collapse';
import ProgressBar from '@/components/atoms/ProgressBar';
import { TbReport } from 'react-icons/tb';
import styles from './index.module.css';

export interface ClassAccordionProps {
  type: 'completed' | 'inprogress' | 'locked';
  classNumber: number;
  progress?: number;
}

const ClassAccordion: FC<ClassAccordionProps> = ({
  type,
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
            {type === 'inprogress' && (
              <ProgressBar
                percentage={progress!}
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
              <Button type={'blackWhite'} text={'Finished'}>
                <div className="flex items-center justify-center gap-2">
                  <TbReport className="text-lg" />
                  <p>Report</p>
                </div>
              </Button>
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
                <ClassAccordionRow
                  classwork="yellow"
                  homework="green"
                  text="Topic 1"
                  link={'/'}
                />
                <ClassAccordionRow
                  classwork="green"
                  homework="yellow"
                  link={'/'}
                  text="Topic 2"
                />
                <ClassAccordionRow
                  classwork="grey"
                  homework="grey"
                  link={'/'}
                  text="Topic 3"
                />
              </div>
              <div className="mt-4 tablet:mt-0">
                <AccordionButton
                  type="grey"
                  text={'Test'}
                  link="/"
                  disabled={true}
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
