import React from 'react';
import MainHeadline from './components/MainHeadline';
import Chatbot from './components/chatbot';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/footerSection';
import CookiePolicy from './components/CookiePolicy';
import { useTheme } from '../utilities/contexts/ThemeContext';

const Home = () => {
  const { colorScheme } = useTheme();

  return (
    <div>
      <MainHeadline colorScheme={colorScheme} isHome />
      <Chatbot colorScheme={colorScheme} />
      <FeatureSection hasHeading isHome />
      <Testimonial getLink='swipet-journeys' />
      <FooterSection />
      <CookiePolicy />
    </div>
  );
};

export default Home;
