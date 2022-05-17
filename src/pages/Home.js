import React from 'react';
import MainHeadline from './components/MainHeadline';
import Chatbot from './components/chatbot';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/footerSection';
import CookiePolicy from './components/CookiePolicy';
import useDarkMode from '../utilities/hooks/useDarkMode';

const Home = () => {
  const mode = useDarkMode();

  return (
    <div className='overflow-x-hidden'>
      <MainHeadline mode={mode} />
      <Chatbot mode={mode} />
      <FeatureSection />
      <Testimonial />
      <FooterSection mode={mode} />
      <CookiePolicy />
    </div>
  );
};

export default Home;
