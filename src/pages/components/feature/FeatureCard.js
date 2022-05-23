import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PawTrail from './PawTrail';

const FeatureCard = ({ item, index, length }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    window.addEventListener('load', AOS.refresh);
  }, []);

  const displayPaws = () => {
    if (index < length - 1) {
      return (
        <div
          className={`absolute top-[155px] -z-10 hidden sm:hidden md:top-[286px] md:left-[369px] md:block 
            lg:left-[401px] xl:left-[355px] xl:top-[231px] 2xl:left-[457px] 2xl:top-[307px]
            ${index % 2 !== 0 ? 'rotate-[50deg]' : 'rotate-[-50deg]'}`}
        >
          <PawTrail />
        </div>
      );
    }

    return null;
  };

  return (
    <div className='px-5 sm:px-8 md:px-24 lg:px-14 xl:px-[200px] 2xl:px-[240px] 3xl:px-[320px]'>
      {/* feature */}
      <div className='relative z-20 mt-[50px] sm:mt-24 lg:mt-[144px]'>
        <div
          className={`flex flex-col ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center justify-center gap-x-40 md:gap-x-10`}
        >
          {/* Image */}
          <div className='mb-[15px] flex flex-1 justify-center sm:mb-0'>
            <LazyLoadImage
              className='z-50 h-3/4 w-3/4 lg:h-5/6 lg:w-5/6'
              data-aos='fade-up'
              src={item.src}
              alt={item.name}
            />
          </div>
          {/* Content */}
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h3 className='mb-4 text-center text-2xl font-semibold text-navy-900 dark:text-orange-900 sm:text-3xl md:mb-4 lg:text-left lg:text-4xl'>
              {item.title}
            </h3>
            <p className='text-center text-sm text-brown-900 dark:text-white sm:text-base md:w-full md:text-left lg:text-lg'>
              {item.description}
            </p>
          </div>
        </div>
        {displayPaws()}
      </div>
    </div>
  );
};

export default FeatureCard;
