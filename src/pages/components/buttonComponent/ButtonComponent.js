import React from 'react';

const ButtonComponent = ({ buttonLabel, type }) => (
  <button
    className=' mt-[14px] h-[29px] w-full rounded-md bg-orange-900 text-base text-[24px] font-bold text-white sm:h-[59px]'
    type={type}
  >
    {buttonLabel}
  </button>
);

export default ButtonComponent;