'use client';

import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { DashedLine } from '@/components/atoms/DashedLine';
import Level from '@/components/molecules/Level';
import { levels } from '@/helpers/levelDetails';

export interface CurriculumSectionProps {}

const CurriculumSection: FC<CurriculumSectionProps> = ({}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end center'],
  });

  const solidHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      id="curriculum"
      className="p-12 py-5 tablet:p-10 tablet:py-6 desktop:py-8 desktop:px-24"
    >
      <h1 className="pt-2 text-xl font-bold text-center text-white desktop:text-2xl">
        Unlocking <span className="text-gold">Abacus Mastery</span>: Our
        Comprehensive <span className="text-gold">Curriculum</span>
      </h1>
      <div className="flex flex-col items-center justify-center text-left">
        <div className="pt-16">
          <div ref={targetRef} className="relative">
            <motion.svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2px] left-4 top-2 -translate-x-1/2 absolute desktop:ml-10 -z-10"
              style={{ height: solidHeight }}
            >
              <line
                x1="1"
                y1="-4.37114e-08"
                x2="1.00001"
                y2="2000"
                stroke="#FACB25"
                strokeWidth="2"
              />
            </motion.svg>
            <DashedLine className="w-[2px] left-4 top-2 -translate-x-1/2 absolute desktop:ml-10 h-full -z-10" />

            {levels.map((level, index) => (
              <Level
                key={level.title}
                title={level.title}
                points={level.points}
                lastLevel={levels.length - 1 === index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
