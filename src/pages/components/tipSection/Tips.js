import React from 'react';
import CheckCirledIcon from '../icons/CheckCircledIcon';
import { tips } from '../../../utilities/constants';

const Tips = () => (
  <>
    <ul className='mb-7 list-none px-9 py-2'>
      {tips.map((tip, index) => (
        <li className='flex flex-row py-4' key={index}>
          <div className='relative left-5 top-1 h-4 w-4 rounded-full bg-white' />
          <CheckCirledIcon />
          <span className='text ml-2 flex-1 text-2xl text-brown-900 dark:text-white'>{tip}</span>
        </li>
      ))}
    </ul>
    <p className='text-center text-3xl font-semibold text-brown-900 dark:text-white'>
      You’re good to go!
    </p>
  </>
);

export default Tips;
