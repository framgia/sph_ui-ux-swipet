import React from 'react';

const PlacePercentage = () => (
  <div className='flex'>
    <li className='flex w-[80px] flex-col items-center justify-center border-r-2 text-[12px] text-[#A3AED0]'>
      <div className='flex items-center justify-center gap-[5px]'>
        <div className='h-2 w-2 rounded-lg bg-[#4318FF]' />
        Basak
      </div>
      <span className='text-[18px] font-bold text-[#2B3674]'>33%</span>
    </li>
    <li className='flex w-[80px] flex-col items-center justify-center border-r-2 text-[12px] text-[#A3AED0]'>
      <div className='flex items-center justify-center gap-[5px]'>
        <div className='h-2 w-2 rounded-lg bg-[#43AAF4]' />
        Mandaue
      </div>
      <span className='text-[18px] font-bold text-[#2B3674]'>25%</span>
    </li>
    <li className='flex w-[80px] flex-col items-center justify-center text-[12px] text-[#A3AED0]'>
      <div className='flex items-center justify-center gap-[5px]'>
        <div className='h-2 w-2 rounded-lg bg-[#6AD2FF]' />
        Carcar
      </div>
      <span className='text-[18px] font-bold text-[#2B3674]'>12%</span>
    </li>
  </div>
);

export default PlacePercentage;
