'use client';

import { FC, useState } from 'react';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import styles from './index.module.css';

export interface CounterCardProps {
  count: number;
  category: string;
}

const CounterCard: FC<CounterCardProps> = ({ count, category }) => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <ScrollTrigger onEnter={() => setCounterStart(true)}>
        <div
          className={`flex justify-start gap-2 p-8 h-32 desktop:h-36 desktop:p-12 tablet:px-4  text-center border border-gold shadow-boxGold rounded-xl ${styles.counterCard}`}
        >
          <div className="flex items-center justify-center w-2/6 p-2 text-sm font-semibold text-gold tablet:text-md desktop:text-lg">
            {counterStart && (
              <>
                <CountUp start={0} end={count} duration={3} delay={0} /> +
              </>
            )}
          </div>
          <div className="flex items-center w-4/6 p-2 text-md font-semibold text-left tablet:text-sm desktop:text-lg">
            {category}
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default CounterCard;
