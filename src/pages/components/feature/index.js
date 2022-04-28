import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../../utilities/constants';

const FeatureSection = () => {
  return (
    <section>
      {/* Heading */}
      <div className="title-heading">
        <h2>Adopting a pet has never been easier</h2>
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
