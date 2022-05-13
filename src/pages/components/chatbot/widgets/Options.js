import React from 'react';

const Options = ({ options }) => {
  return (
    <div className='pb-2'>
      <div className='mx-12 flex flex-col'>
        {options.map((option) => {
          return (
            <div
              className='mt-2 cursor-pointer rounded-lg border-2 border-navy-200 px-2 py-1 text-center text-base hover:bg-sky-100 dark:bg-dark-ash-800 dark:text-white dark:hover:border-white'
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
