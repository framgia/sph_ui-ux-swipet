import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../../utilities/constants';

const FeatureSection = () => {
  return (
    <section className='dark:bg-dark-ash-800 pb-[70px]'>
      {/* Heading */}
      <div className='title-heading'>
        <h2 className='dark:text-orange-900'>
          Adopting a pet has never been easier
        </h2>
      </div>
      {/* Cards */}
      {features.map((item, index) => (
        <FeatureCard
          item={item}
          key={index}
          index={index}
          length={features.length}
        />
      ))}
    </section>
  );
};

export default FeatureSection;
