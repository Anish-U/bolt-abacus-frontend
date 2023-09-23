import CounterCard from '@/components/atoms/CounterCard';
import { FC } from 'react';

export interface CounterSectionProps {}

const CounterSection: FC<CounterSectionProps> = ({}) => {
  return (
    <div className="p-12 tablet:p-10 desktop:py-16 desktop:pt-4 desktop:px-24">
      <div className="grid grid-cols-1 gap-12 py-16 mx-auto tablet:grid-cols-3 desktop:grid-cols-3">
        <CounterCard category="Mathematicians Created" count={100} />
        <CounterCard category="Hours Taught" count={2000} />
        <CounterCard category="Communities and Schools partnered" count={5} />
      </div>
    </div>
  );
};

export default CounterSection;
