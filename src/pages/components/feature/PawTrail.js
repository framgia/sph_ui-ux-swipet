import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PawTrail = () => {
  const pawTrails = [];
  for (let i = 0; i < 6; i++) {
    pawTrails.push(
      <div key={i} className='-z-50'>
        <LazyLoadImage
          data-aos='zoom-out'
          data-aos-delay='1500'
          data-aos-duration='0'
          className={`md:w-[40px] lg:w-[45px] xl:w-[65px] 2xl:w-[90px] ${
            i % 2 !== 0 ? 'my-3 ml-[60px] xl:ml-[95px] 2xl:ml-[140px] ' : ''
          }`}
          src='/images/PawTrail.svg'
          alt='paw trail'
        />
      </div>,
    );
  }

  return pawTrails;
};

export default PawTrail;
