import { FC } from 'react';

export interface ProgressBarProps {
  percentage: number;
  color: 'blue' | 'green';
}

const ProgressBar: FC<ProgressBarProps> = ({ percentage, color }) => {
  const makeSafePercentage = (value: number) => {
    if (value > 100) {
      return 100;
    } else if (value < 0) {
      return 0;
    }
    return value;
  };

  return (
    <div className="w-full h-3 bg-white rounded-full">
      <div
        className={`h-3 rounded-full 
        ${color === 'green' && 'bg-lightGreen'}
        ${color === 'blue' && 'bg-lightBlue'}
        `}
        style={{ width: `${makeSafePercentage(percentage)}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
