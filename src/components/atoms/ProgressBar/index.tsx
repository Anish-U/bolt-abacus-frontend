import { FC } from 'react';
import { MdLock } from 'react-icons/md';

export interface ProgressBarProps {
  percentage: number;
  type: 'blue' | 'green' | 'purple' | 'locked';
  isBgBlack?: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentage, type, isBgBlack }) => {
  const makeSafePercentage = (value: number) => {
    if (value > 100) {
      return 100;
    } else if (value < 0) {
      return 0;
    }
    return value;
  };

  return (
    <div
      className={`relative w-full h-3 ${
        isBgBlack ? 'bg-darkGrey' : 'bg-white'
      } rounded-full`}
    >
      <div
        className={`h-3 rounded-full 
        ${type === 'green' && 'bg-lightGreen'}
        ${type === 'blue' && 'bg-lightBlue'}
        ${type === 'purple' && 'bg-purple'}
        ${type === 'locked' && 'bg-darkGrey'}
        `}
        style={{ width: `${makeSafePercentage(percentage)}%` }}
      ></div>
      {type === 'locked' && (
        <div className="absolute left-0 top-0 bg-darkBlue p-1 rounded-full -translate-y-1/3 tablet:p-2">
          <MdLock className="text-lg tablet:text-xl" />
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
