import React from 'react';
import MainHeadline from './components/MainHeadline';
import ContactUs from './components/ContactUs';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/footerSection';

const Home = () => {
  return (
    <div>
      <MainHeadline />
      <ContactUs />
      <FeatureSection />
      <Testimonial />
      <FooterSection />
    </div>
  );
};

export default Home;
