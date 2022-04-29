import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FooterContent from '../footerSection/FooterContent';

const ExternalPageTemplate = ({ title, children }) => {
  return (
    <Fragment>
      <header className='bg-orange-100 h-[100px] border-b border-brown-900 flex items-center sticky top-0'>
        <Link
          to='/'
          className='w-[70px] h-[70px] ml-[20px] lg:ml-[100px] md:ml-[50px] xl:ml-[200px]'
        >
          <img src='/images/LogoBrown.svg' alt='swipet logo brown' />
        </Link>
      </header>
      <main
        className='px-[20px] lg:px-[100px] md:px-[50px] xl:px-[200px] text-lg text-brown-900 py-[32px] 
          border-b border-brown-900'
      >
        <h1 className='text-[40px] font-bold mb-[30px] leading-10'>{title}</h1>
        {children}
      </main>
      <FooterContent />
    </Fragment>
  );
};

export default ExternalPageTemplate;
