import React from 'react';
import PlanCard from './PlanCard';
import { subscriptions } from '../../../utilities/constants';

const SubscriptionSection = () => (
  <section className='bg-white py-28'>
    {/* Heading */}
    <div className='title-heading pb-[80px]'>
      <h2 className='heading-size dark:text-orange-900'>Boost your Swipet experience</h2>
    </div>

    {/* Cards */}
    <div className='flex flex-col items-center justify-center gap-[75px] lg:flex-row'>
      {subscriptions.map((subscription, index) => (
        <PlanCard subscription={subscription} key={index} />
      ))}
    </div>
  </section>
);

export default SubscriptionSection;
