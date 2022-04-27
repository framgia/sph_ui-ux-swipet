import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../../utilities/constants';

const FeatureSection = () => {
  return (
    <section>
      {/* Heading */}
      <div className="w-2/3 lg:w-2/5 mx-auto sm:text-[40px] pt-[60px] sm:pt-[160px]">
        <h1 className="text-5xl text-center font-bold text-navy-900">
          Adopting a pet has never been easier
        </h1>
      </div>
      {/* Cards */}
      {features.map((item) => (
        <FeatureCard item={item} />
      ))}
    </section>
  );
};

export default FeatureSection;
