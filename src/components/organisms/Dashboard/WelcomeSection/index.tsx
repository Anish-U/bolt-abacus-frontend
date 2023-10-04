'use client';

import Button from '@/components/atoms/Button';
import { FC } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

export interface WelcomeSectionProps {
  classLink: string;
}

const WelcomeSection: FC<WelcomeSectionProps> = ({ classLink }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      {user && (
        <div className="flex flex-col gap-4 px-6 py-2 justify-evenly tablet:flex-row tablet:justify-between tablet:items-center tablet:p-10 desktop:px-24">
          <p className="font-medium text-white text-md desktop:text-lg">
            Welcome back {`${user?.name.first} ${user?.name.last}`}
          </p>
          <div className="w-full tablet:w-40">
            <Link href={classLink} target="_blank">
              <Button text="Join Class" type="blue" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeSection;
