import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FactsAboutPetInfo from './FactsAboutPetInfo';

const PetsDetails = ({ getData }) => (
  <div>
    <h1 className='mb-[70px] text-[48px] font-semibold text-brown-900'>
      Hi my name is <span className='text-[64px] font-bold text-orange-900'>{getData.author}</span>
    </h1>
    <div className='mb-[132px] flex justify-center gap-[64px]'>
      <div>
        <LazyLoadImage
          src={getData.src}
          alt='petInfoImage'
          className='mb-[52px] h-[548px] w-[547px] rounded-lg drop-shadow-md'
        />
        <div className='flex gap-4'>
          <span>
            <LazyLoadImage
              src={getData.src}
              alt='petInfoImage'
              className='h-[127px] w-[125px] rounded-lg drop-shadow-md'
            />
          </span>
          <span>
            <LazyLoadImage
              src={getData.src}
              alt='petInfoImage'
              className='h-[127px] w-[125px] rounded-lg drop-shadow-md'
            />
          </span>
          <span>
            <LazyLoadImage
              src={getData.src}
              alt='petInfoImage'
              className='h-[127px] w-[125px] rounded-lg drop-shadow-md'
            />
          </span>
          <span>
            <LazyLoadImage
              src={getData.src}
              alt='petInfoImage'
              className='h-[127px] w-[125px] rounded-lg drop-shadow-md'
            />
          </span>
        </div>
      </div>
      <div className='w-[472px] rounded-lg bg-orange-100 text-brown-900 drop-shadow-md'>
        <FactsAboutPetInfo getData={getData} />
      </div>
    </div>
  </div>
);

export default PetsDetails;
