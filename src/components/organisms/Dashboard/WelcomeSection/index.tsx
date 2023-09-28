import Button from '@/components/atoms/Button';
import { FC } from 'react';
import Link from 'next/link';

export interface WelcomeSectionProps {
  name: string;
  classLink: string;
}

const WelcomeSection: FC<WelcomeSectionProps> = ({ name, classLink }) => {
  return (
    <div className="flex flex-col gap-4 px-6 py-2 justify-evenly tablet:flex-row tablet:justify-between tablet:items-center tablet:p-10 desktop:px-24">
      <p className="font-medium text-white text-md desktop:text-lg">
        Welcome back {name}
      </p>
      <div className="w-full tablet:w-40">
        <Link href={classLink} target="_blank">
          <Button text="Join Class" type="blue" />
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
