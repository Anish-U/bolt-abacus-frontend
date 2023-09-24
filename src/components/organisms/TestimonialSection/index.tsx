'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FC, useRef } from 'react';

import Slider from '@ant-design/react-slick';
import SliderButton from '@/components/atoms/SliderButton';
import TestimonialCard from '@/components/molecules/TestimonialCard';

export interface TestimonialSectionProps {}

const TestimonialSection: FC<TestimonialSectionProps> = ({}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arrowRef = useRef<any>(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    ref: arrowRef,
  };

  return (
    <>
      <div className="p-12 tablet:p-10 desktop:pt-12 desktop:px-28 tablet:pb-24">
        <div className="relative">
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
          <SliderButton
            onClick={() => {
              if (arrowRef?.current != null) arrowRef.current.slickPrev();
            }}
            isPrev={true}
          />
          <SliderButton
            onClick={() => {
              arrowRef?.current?.slickNext();
            }}
            isPrev={false}
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
