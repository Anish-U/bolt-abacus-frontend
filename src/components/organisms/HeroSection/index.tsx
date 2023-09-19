import Button from '@/components/atoms/Button';
import { FC } from 'react';
import Image from 'next/image';
import { ThunderIcon } from '@/components/atoms/ThunderIcon';
import styles from './index.module.css';

export interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div
      className={`px-6 flex flex-col justify-evenly items-center desktop:flex-row desktop:px-16 ${styles.heroSection}`}
    >
      <div className="flex flex-col items-center py-6 justify-evenly desktop:items-start">
        <h1 className="w-64 py-4 text-2xl font-bold tablet:text-4xl tablet:w-[460px] desktop:text-5xl desktop:w-fit">
          <span>
            The perfect app to
            <br />
          </span>
          <span className="text-gold">
            learn and master
            <br />
          </span>
          <span className="flex items-center">
            abacus! <ThunderIcon className="ml-4 h-9 desktop:h-16" />
          </span>
        </h1>
        <div className="flex gap-2 w-64 tablet:w-[460px] tablet:gap-5 desktop:w-fit desktop:mt-10">
          <Button text="Curriculum" type="primary" />
          <Button text="Contact Us" type="secondary" />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 p-6 w-72 tablet:w-[560px] tablet:gap-8 desktop:gap-12">
        <div className="col-span-1 row-span-2 row-start-2">
          <Image
            src="/images/class_four.png"
            alt=""
            height={311}
            width={265}
            layout="responsive"
            className="border rounded-lg shadow-boxGold border-gold"
          />
        </div>
        <div className="col-span-1 row-span-2 row-start-1">
          <Image
            src="/images/class_one.png"
            alt=""
            height={311}
            width={265}
            layout="responsive"
            className="border rounded-lg shadow-boxGold border-gold"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
