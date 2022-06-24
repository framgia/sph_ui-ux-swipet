import React from 'react';

const Button = ({ buttonLabel, type, className, onClick, isDisable }) => (
  <button
    className={`mt-[51px] h-[29px] w-full rounded-[5px] bg-orange-900 text-xl 
      font-bold text-white hover:bg-orange-700 disabled:bg-[#d97d378a] sm:h-[59px] ${className}`}
    type={type}
    onClick={onClick}
    disabled={isDisable}
  >
    {buttonLabel}
  </button>
);

export default Button;
