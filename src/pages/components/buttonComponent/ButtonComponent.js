import React from 'react';

const ButtonComponent = ({ buttonLabel, type }) => (
  <button
    className='mt-3 h-[29px] w-full rounded-md bg-orange-900 text-base font-bold text-white sm:mt-[40px] sm:h-[59px]'
    type={type}
  >
    {buttonLabel}
  </button>
);

export default ButtonComponent;
