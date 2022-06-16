import React from 'react';

const Button = ({ buttonLabel, type, className }) => (
  <button
    className={`mt-[51px] h-[29px] w-full rounded-[5px] bg-orange-900 text-xl font-bold text-white hover:bg-orange-700 sm:h-[59px] ${className}`}
    type={type}
  >
    {buttonLabel}
  </button>
);

export default Button;
