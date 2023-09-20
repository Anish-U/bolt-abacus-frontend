import CounterCard from '@/components/atoms/CounterCard';
import { FC } from 'react';

export interface CounterSectionProps {}

const CounterSection: FC<CounterSectionProps> = ({}) => {
  return (
    <div className="p-16 tablet:p-10 desktop:p-16">
      <div className="grid grid-cols-1 gap-10 tablet:grid-cols-3 tablet:gap-5 desktop:grid-cols-3 desktop:gap-4">
        <CounterCard category="Mathematicians Created" count={100} />
        <CounterCard category="Hours Taught" count={2000} />
        <CounterCard
          category="No of Schools and Communities partnered"
          count={5}
        />
      </div>
    </div>
  );
};

export default CounterSection;
