import React from 'react';

const InputField = ({ name, type, placeholder, onChange }) => (
  <div className='mt-[30px] flex flex-col'>
    <div>
      <span className='text-base font-bold text-brown-900'>{name}</span>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className='sm:text-md block h-[29px] w-full rounded-md border 
                    border-brown-600 bg-white px-3 py-2 placeholder-slate-400 focus:border-brown-900 focus:outline-none focus:ring-1
                    focus:ring-sky-500 sm:h-[59px]'
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default InputField;
