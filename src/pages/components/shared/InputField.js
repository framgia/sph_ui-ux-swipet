import React from 'react';

const InputField = ({ name, type, placeholder, onChange }) => (
  <div className='mt-[37px] flex flex-col'>
    <div>
      <p className='mb-[13px] text-xl font-bold text-brown-900'>{name}</p>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className='sm:text-md block h-[29px] w-full rounded-[5px] border 
                    border-brown-600 bg-white px-3 py-2 placeholder-slate-400 hover:border-brown-400 focus:border-brown-900 focus:outline-none
                    focus:ring-1 focus:ring-sky-500 sm:h-[59px]'
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default InputField;
