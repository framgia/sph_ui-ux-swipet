import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PawTrail from './PawTrail';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
          className={`absolute top-[155px] -z-50 hidden md:left-[270px] md:block 
            lg:left-[245px] xl:left-[400px] xl:top-[270px] 2xl:left-[575px] 2xl:top-[380px]
            ${index % 2 !== 0 ? 'rotate-[50deg]' : 'rotate-[-50deg]'}`}
        >
          <PawTrail />
        </div>
      );
    }
  };

  return (
    <div className='px-5 sm:px-14 lg:px-[200px]'>
      {/* feature */}
      <div className='relative mt-[50px] sm:mt-24 lg:mt-[144px]'>
        <div
          className={`container flex flex-col ${
            index % 2 !== 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
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
          <div className='flex flex-1 flex-col items-center md:items-start'>
            <h3 className='mb-0 text-center font-semibold text-navy-900 sm:text-left sm:text-[32px] md:mb-4'>
              {item.title}
            </h3>
            <p className='text-justify text-brown-900 sm:text-xl md:w-full md:text-left'>
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
