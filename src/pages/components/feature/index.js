import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../../utilities/constants';

const FeatureSection = () => (
  <section className='pb-[70px] pt-24 dark:bg-dark-ash-800 sm:pt-16 lg:pt-0'>
    {/* Heading */}
    <div className='title-heading'>
      <h2 className='heading-size dark:text-orange-900'>Adopting a pet has never been easier</h2>
    </div>
    {/* Cards */}
    {features.map((item, index) => (
      <FeatureCard item={item} key={index} index={index} length={features.length} />
    ))}
  </section>
);

export default FeatureSection;
