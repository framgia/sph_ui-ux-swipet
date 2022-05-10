import React from 'react';
import MainHeadline from './components/MainHeadline';
import Chatbot from './components/chatbot';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/footerSection';
import CookiePolicy from './components/CookiePolicy';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <MainHeadline />
      <Chatbot />
      <FeatureSection />
      <Testimonial />
      <FooterSection />
      <CookiePolicy />
    </div>
  );
};

export default Home;
