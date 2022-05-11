import React from 'react';
import { requirements } from '../../../../utilities/constants';

const Requirements = () => {
  return (
    <div className='border-2 p-4 pl-9 mx-12 bg-sky-100 rounded-lg'>
      <ul className='list-disc'>
        {requirements.map((req) => {
          return (
            <li className='pb-3' key={req.id}>
              {req.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Requirements;
