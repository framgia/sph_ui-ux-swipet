import React from 'react';

const Options = ({ options }) => {
  return (
    <div className="pb-2">
      <div className="flex flex-col mx-12">
        {options.map((option) => {
          return (
            <div
              className="mt-2 px-2 py-1 border-2 border-navy-200 rounded-lg cursor-pointer text-base text-center hover:bg-sky-100"
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
