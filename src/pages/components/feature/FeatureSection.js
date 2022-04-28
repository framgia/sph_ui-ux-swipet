import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../../utilities/constants';

const FeatureSection = () => {
  return (
    <section>
      {/* Heading */}
      <div className="w-11/12 md:w-2/3 lg:w-2/5 mx-auto sm:text-[40px] pt-[60px] sm:pt-[160px]">
        <h2>Adopting a pet has never been easier</h2>
      </div>
      {/* Cards */}
      {features.map((item, index) => (
        <FeatureCard item={item} key={index} />
      ))}
    </section>
  );
};

export default FeatureSection;
