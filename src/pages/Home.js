import React from 'react';
import MainHeadline from './components/MainHeadline';
import ContactUs from './components/ContactUs';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';

const Home = () => {
  return (
    <div>
      <MainHeadline />
      <ContactUs />
      <div className="bg-main-backgound">
        <FeatureSection />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
