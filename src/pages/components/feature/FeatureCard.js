import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
          className={`-z-50 hidden absolute md:block md:left-[270px] top-[155px] 
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
          <div
            data-aos='fade-up'
            data-aos-delay='1800'
            className='flex flex-1 justify-center mb-[15px] sm:mb-0'
          >
            <img
              className='w-3/4 h-3/4 lg:w-5/6 lg:h-5/6 z-50'
              src={item.src}
              alt={item.name}
            />
          </div>
          {/* Content */}
          <div className='flex flex-1 flex-col items-center md:items-start'>
            <h3 className='text-center sm:text-[32px] sm:text-left md:mb-4 mb-0 font-semibold text-navy-900'>
              {item.title}
            </h3>
            <p className='sm:text-xl md:text-left text-justify md:w-full text-brown-900'>
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
