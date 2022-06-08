import React from 'react';
import PlanCard from './PlanCard';
import { subscriptions } from '../../../utilities/constants';

const SubscriptionSection = () => (
  <section className='bg-white py-28 px-14 dark:bg-dark-ash-700'>
    {/* Heading */}
    <div className='title-heading pb-[80px]'>
      <h2 className='heading-size dark:text-orange-900'>Boost your Swipet experience</h2>
    </div>

    {/* Cards */}
    <div className='flex flex-col items-center justify-center gap-y-14 lg:flex-row lg:gap-14 xl:gap-[75px]'>
      {subscriptions.map((subscription, index) => (
        <PlanCard subscription={subscription} key={index} />
      ))}
    </div>
  </section>
);

export default SubscriptionSection;
