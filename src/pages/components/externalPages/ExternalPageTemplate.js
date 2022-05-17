import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FooterContent from '../footerSection/FooterContent';
import CookiePolicy from '../CookiePolicy';
import useDarkMode from '../../../utilities/hooks/useDarkMode';

const ExternalPageTemplate = ({ title, children }) => {
  const mode = useDarkMode();

  return (
    <Fragment>
      <header className='sticky top-0 flex h-[100px] items-center border-b border-brown-900 bg-orange-100 dark:bg-dark-ash-900'>
        <Link
          to='/'
          className='ml-[20px] h-[70px] w-[70px] md:ml-[50px] lg:ml-[100px] xl:ml-[200px]'
        >
          <LazyLoadImage src='/images/LogoBrown.svg' alt='swipet logo brown' />
        </Link>
      </header>
      <main
        className='border-b border-brown-900 px-[20px] py-[32px] text-lg text-brown-900 dark:bg-dark-ash-700 
          dark:text-white md:px-[50px] lg:px-[100px] xl:px-[200px]'
      >
        <h1 className='mb-[30px] text-[40px] font-bold leading-10'>{title}</h1>
        {children}
      </main>
      <FooterContent mode={mode} />
      <CookiePolicy />
    </Fragment>
  );
};

export default ExternalPageTemplate;
