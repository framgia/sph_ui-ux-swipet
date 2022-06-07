import React from 'react';
import CheckCirledIcon from '../icons/CheckCircledIcon';
import CloseCirledIcon from '../icons/CloseCircledIcon';

const PlanCard = ({ subscription }) => (
  <div className='w-[332px] overflow-hidden rounded-lg bg-orange-100 shadow-lg dark:bg-dark-ash-800'>
    <div className='rounded-t-lg bg-orange-900 py-4 text-center text-2xl font-semibold text-white dark:bg-black'>
      {subscription.name}
    </div>
    <div className='rounded-b-lg'>
      <ul className='list-none divide-y divide-orange-900 px-9 py-2 dark:divide-gray-500'>
        {subscription.content.map((feature, index) => (
          <li className='flex py-4' key={index}>
            <div className='relative left-5 top-1 h-4 w-4 rounded-full bg-white'>.</div>
            {feature.included ? <CheckCirledIcon /> : <CloseCirledIcon />}
            <span className='ml-2 dark:text-white'>{feature.description}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PlanCard;
