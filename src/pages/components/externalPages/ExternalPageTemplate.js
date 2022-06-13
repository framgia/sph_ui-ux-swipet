import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Chatbot from '../chatbot';
import FooterContent from '../footerSection/FooterContent';
import CookiePolicy from '../CookiePolicy';
import ThemeSelect from '../ThemeSelect';
import { useTheme } from '../../../utilities/contexts/ThemeContext';

const ExternalPageTemplate = ({ title, children }) => {
  const { colorScheme } = useTheme();

  return (
    <Fragment>
      <header className=' sticky top-0 z-10 flex h-[100px] items-center justify-between border-b border-brown-900 bg-orange-100 px-[20px] dark:border-white dark:bg-dark-ash-900 md:px-[50px] lg:px-[100px] xl:px-[320px]'>
        <Link to='/' className=' h-[70px] w-[70px] '>
          <LazyLoadImage src='/images/LogoBrown.svg' alt='swipet logo brown' />
        </Link>
        <ThemeSelect />
      </header>
      <main
        className='border-b border-brown-900 px-[20px] py-[32px] text-lg text-brown-900 dark:border-white dark:bg-dark-ash-700
          dark:text-white md:px-[50px] lg:px-[100px] xl:px-[320px]'
      >
        <h1 className='mb-[30px] text-[40px] font-bold leading-10'>{title}</h1>
        {children}
      </main>
      <FooterContent />
      <CookiePolicy />
      <Chatbot colorScheme={colorScheme} />
    </Fragment>
  );
};

export default ExternalPageTemplate;
