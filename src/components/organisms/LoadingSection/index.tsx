import { FC } from 'react';
import Image from 'next/image';

export interface LoadingSectionProps {}

const LoadingSection: FC<LoadingSectionProps> = ({}) => {
  return (
    <div>
      <main className="h-screen flex justify-center flex-col gap-4 items-center">
        <Image src={'/icon.png'} alt={'loading'} height={100} width={100} />
        <h1 className="text-lg font-medium font-sans">Loading...</h1>
      </main>
    </div>
  );
};

export default LoadingSection;
