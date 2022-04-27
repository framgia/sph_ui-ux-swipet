import React from 'react';
import MainHeadline from './components/MainHeadline';
import ContactUs from './components/ContactUs';
import FeatureSection from './components/feature/FeatureSection';

const Home = () => {
  return (
    <div>
      <MainHeadline />
      <ContactUs />
      <div className="bg-main-backgound">
        <FeatureSection />
      </div>
    </div>
  );
};

export default Home;
