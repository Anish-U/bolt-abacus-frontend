import { FC } from 'react';

export interface TestimonialCardProps {}

const TestimonialCard: FC<TestimonialCardProps> = ({}) => {
  return (
    <div className="flex items-center justify-center p-4 text-black tablet:px-24">
      <div className="p-4 desktop:w-[800px] bg-white rounded-2xl">
        <div className="flex flex-col justify-center gap-8 p-2 h-fit tablet:flex-row tablet:gap-12 tablet:p-7 tablet:items-center">
          <div className="flex items-center justify-center">
            <div className="w-40 h-44 desktop:w-72 desktop:h-80 bg-coal"></div>
          </div>
          <div className="flex flex-col pl-1 text-left h-fit tablet:flex-1">
            <h1 className="text-3xl font-serif desktop:text-[96px] desktop:leading-[90px]">
              ❛❛
            </h1>
            <div className="text-xs tablet:text-sm desktop:text-md">
              At Bolt Abacus, we are more than just an online abacus classes
              provider. Based out of vibrant Hyderabad, we are passionate
              education entrepreneurs with a vision to empower students through
              innovative teaching methods.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
