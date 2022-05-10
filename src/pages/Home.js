import React from 'react';
import MainHeadline from './components/MainHeadline';
import ContactUs from './components/ContactUs';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/footerSection';
import CookiePolicy from './components/CookiePolicy';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <MainHeadline />
      <ContactUs />
      <FeatureSection />
      <Testimonial />
      <FooterSection />
      <CookiePolicy />
    </div>
  );
};

export default Home;
