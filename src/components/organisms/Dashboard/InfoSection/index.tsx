import Button from '@/components/atoms/Button';
import { FC } from 'react';
import Link from 'next/link';
import ProgressBar from '@/components/atoms/ProgressBar';

export interface InfoSectionProps {
  currentLevel: number;
  description: string;
  progress: number;
}

const InfoSection: FC<InfoSectionProps> = ({
  currentLevel,
  description,
  progress,
}) => {
  return (
    <div className="grid grid-cols-1 gap-10 px-6 pt-4 tablet:p-10 tablet:grid-cols-2 desktop:px-24">
      <div className="flex flex-col">
        <p className="pb-3 font-medium text-md desktop:text-lg">
          Continue Learning
        </p>
        <div className="flex flex-col h-full p-6 rounded-lg bg-boxGold">
          <p className="pb-1 text-sm font-medium desktop:text-md">
            Level - {currentLevel}
          </p>
          <p className="py-2 font-medium text-md desktop:text-lg">
            {description}
          </p>
          <ProgressBar type="green" percentage={progress} />
          <div className="pt-6">
            <Link href={`/student/level/${currentLevel}`}>
              <Button type="primary" text="Resume Learning" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="pb-3 font-medium text-md desktop:text-lg">
          Your Learning Playground
        </p>
        <div className="flex flex-col h-full p-6 rounded-lg bg-boxPurple">
          <p className="pb-1 text-sm font-medium desktop:text-md">
            Practice Mode
          </p>
          <p className="flex-1 py-2 font-medium text-md desktop:text-lg">
            Enhance your proficiency with 100 well crafted problems
          </p>
          <div className="pt-6">
            <Link href={'#practice'}>
              <Button type="purple" text="Practice Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
