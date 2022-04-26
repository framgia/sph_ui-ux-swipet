import React from 'react';
import MainHeadline from './components/MainHeadline';
import ContactUs from './components/contactUs';

const Home = () => {
  return (
    <div>
      <MainHeadline />
      Welcome!
      {/* Divide here per section */}
      <ContactUs />
    </div>
  );
};

export default Home;
