import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  return (
    <section>
      {/* Heading */}
      <div className="sm:w-2/3 lg:w-2/5 mx-auto sm:text-[40px] lg:pt-[160px] pt-[60px]">
        <h1 className="text-5xl text-center font-bold text-navy-900">
          Adopting a pet has never been easier
        </h1>
      </div>

      <FeatureCard />
    </section>
  );
};

export default FeatureSection;
