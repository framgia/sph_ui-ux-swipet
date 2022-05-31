import React from 'react';
import CheckCirledIcon from '../icons/CheckCircledIcon';
import CloseCirledIcon from '../icons/CloseCircledIcon';

const PlanCard = ({ subscription }) => (
  <div className='w-[332px] overflow-hidden bg-orange-100 shadow-lg'>
    <div className='rounded-t-lg bg-orange-900 py-4 text-center text-2xl font-semibold text-white'>
      {subscription.name}
    </div>
    <div className='rounded-b-lg'>
      <ul className='list-none divide-y divide-orange-900 px-9 py-2'>
        {subscription.content.map((feature, index) => (
          <li className='flex py-4' key={index}>
            {feature.included ? <CheckCirledIcon /> : <CloseCirledIcon />}{' '}
            <span className='ml-2'>{feature.description}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PlanCard;
