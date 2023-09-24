import { FC } from 'react';
import Image from 'next/image';
import dotImage from '/public/images/dot.png';

export interface LevelProps {
  title: string;
  points: string[];
  lastLevel: boolean;
}

const Level: FC<LevelProps> = ({ title, points, lastLevel }) => {
  return (
    <div className="flex gap-6 desktop:gap-24">
      <div className="relative shrink-0 desktop:ml-10">
        <Image
          src={dotImage}
          alt=""
          width={100}
          height={100}
          className="w-8 h-8"
        />
        {lastLevel && (
          <div className="absolute bg-black h-full p-1 left-1/2 top-3 -z-10 w-8 -translate-x-1/2"></div>
        )}
      </div>
      <div className="pt-1 pb-10 pl-4 desktop:pt-0">
        <h2 className="text-lg font-normal text-gold desktop:text-xl">
          {title}
        </h2>
        <div className="pt-2">
          {points.map((point) => (
            <li
              key={point}
              className="ml-3 py-1 list-disc text-md tablet:ml-6 desktop:text-lg"
            >
              {point}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level;
