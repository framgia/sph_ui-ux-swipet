import React from 'react';

const Button = ({ buttonLabel, type }) => (
  <button
    className='mt-[51px] h-[29px] w-full rounded-[5px] bg-orange-900 text-base font-bold text-white text-[24px] hover:bg-orange-700 sm:h-[59px]'
    type={type}
  >
    {buttonLabel}
  </button>
);

export default Button;
