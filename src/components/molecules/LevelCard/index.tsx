import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '@/components/atoms/Button';
import { FC } from 'react';
import Link from 'next/link';
import LockIcon from '@/components/atoms/LockIcon';
import { LuCircleDashed } from 'react-icons/lu';
import ProgressBar from '@/components/atoms/ProgressBar';
import styles from './index.module.css';

export interface LevelCardProps {
  type: 'finished' | 'inprogress' | 'locked';
  level: number;
  description: string;
}

const LevelCard: FC<LevelCardProps> = ({ type, level, description }) => {
  return (
    <div
      className={`relative p-6 rounded-lg border-2 
      ${type !== 'locked' && 'border-gold'} 
      ${styles.levelCard}`}
    >
      <div className="flex items-center justify-between">
        {type === 'locked' && (
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center font-bold text-coal bg-white/90">
            <LockIcon />
          </div>
        )}
        <p className="text-sm font-semibold desktop:text-md">Level - {level}</p>
        {type === 'finished' && (
          <div className="flex items-center gap-1 text-sm font-medium text-green desktop:text-md">
            <p>Finished</p>
            <BsCheckCircleFill className="text-sm desktop:text-md" />
          </div>
        )}
        {type === 'inprogress' && (
          <div className="flex items-center gap-1 text-sm font-medium desktop:text-md">
            <p>In Progress</p>
            <LuCircleDashed className="text-sm desktop:text-md text-gold" />
          </div>
        )}
      </div>
      <div className="">
        <p className="py-2 font-medium text-md desktop:text-lg">
          {description}
        </p>
        {type === 'finished' && (
          <>
            <ProgressBar color="blue" percentage={100} />
            <div className="pt-6">
              <Link href={'#report'}>
                <Button type="black" text="Report" />
              </Link>
            </div>
          </>
        )}
        {type === 'inprogress' && (
          <>
            <ProgressBar color="green" percentage={50} />
            <div className="pt-6">
              <Link href={'#class'}>
                <Button type="primary" text="Resume Learning" />
              </Link>
            </div>
          </>
        )}
        {type === 'locked' && (
          <>
            <ProgressBar color="blue" percentage={0} />
            <div className="pt-6">
              <Button type="primary" text="Start Learning" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LevelCard;
