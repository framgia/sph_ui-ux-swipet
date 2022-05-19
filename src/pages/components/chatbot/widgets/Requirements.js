import React from 'react';
import { requirements } from '../../../../utilities/constants';

const Requirements = () => (
  <div className='mx-12 rounded-lg border-2 bg-sky-100 p-4 pl-9'>
    <ul className='list-disc'>
      {requirements.map((req) => (
        <li className='pb-3' key={req.id}>
          {req.text}
        </li>
      ))}
    </ul>
  </div>
);

export default Requirements;
