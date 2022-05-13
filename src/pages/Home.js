import React, { useState, useEffect } from 'react';
import MainHeadline from './components/MainHeadline';
import Chatbot from './components/chatbot';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/footerSection';
import CookiePolicy from './components/CookiePolicy';

const Home = () => {
  const [mode, setMode] = useState('light');

  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) =>
        onSelectMode(e.matches ? 'dark' : 'light'),
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );

    // Remove listener
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
    };
  }, []);

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
