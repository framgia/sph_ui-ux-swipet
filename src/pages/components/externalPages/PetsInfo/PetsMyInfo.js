import React from 'react';
import CheckCircledIcon from '../../icons/CheckCircledIcon';

const PetsMyInfo = ({ getData }) => (
  <div>
    <h1 className='mb-[70px] text-[48px] font-semibold text-brown-900 dark:text-orange-900'>
      My info
    </h1>
    <div className='grid grid-flow-col grid-rows-3 gap-4 pl-[64px] pb-[123px] text-[16px] font-bold'>
      {getData.map((item, idx) => (
        <div className='flex gap-[9px] dark:text-white' key={idx}>
          <CheckCircledIcon /> <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PetsMyInfo;
