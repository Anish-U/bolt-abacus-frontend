'use client';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FC, useState } from 'react';

import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';

export interface CarouselProps {}

const Carousel: FC<CarouselProps> = ({}) => {
  // TODO: Change with custom images
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  // TODO: Implement auto slide

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const slideRight = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="mt-4 text-gold h-[200px] w-full relative group tablet:h-[350px] desktop:h-[500px]">
      <Image
        className="object-cover w-full h-full"
        src={slides[currentIndex].url}
        alt="ImageDescription"
        width={1440}
        height={486}
        objectFit="cover"
      />
      <div
        className="absolute left-0 p-1 text-xl translate-y-1/2 cursor-pointer bottom-1/2 tablet:text-xl desktop:text-xl"
        onClick={slideLeft}
      >
        <BsChevronCompactLeft />
      </div>
      <div
        className="absolute right-0 p-1 text-xl translate-y-1/2 cursor-pointer bottom-1/2 tablet:text-xl desktop:text-xl"
        onClick={slideRight}
      >
        <BsChevronCompactRight />
      </div>

      <div className="absolute flex items-center justify-center -translate-x-1/2 bottom-2 left-1/2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer duration-500 ease-in-out
            ${
              slideIndex === currentIndex
                ? 'text-gold text-xl  tablet:text-2xl desktop:text-2xl'
                : 'text-gold/70 text-lg  tablet:text-xl desktop:text-xl'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
