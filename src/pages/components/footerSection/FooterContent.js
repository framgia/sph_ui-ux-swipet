import React from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
  return (
    <div className='flex flex-col px-[20px] sm:px-[20px] md:px-[55px] lg:px-[200px] text-brown-900'>
      <div className='flex flex-col justify-between items-center md:flex-row sm:gap-12'>
        <div className='flex flex-col justify-center items-center w-[300px] md:w-[250px] pb-6 md:pb-12 mt-7 md:mt-3 md:items-start'>
          <Link to='/'>
            <img
              src='/images/LogoDarkFit.svg'
              alt='LogoDark'
              className='h-12 w-48'
            />
          </Link>
          <p className='text-center md:text-left mt-8'>
            Swipet is a mobile application that makes pet adoption fun and
            easier.
          </p>
        </div>
        <div className='flex py-8 flex-col justify-center items-center md:items-start w-[300px]sm:w-[148px] sm:pl-[30px] md:mt-[57px]'>
          <div className='font-bold text-2xl'>Information</div>
          <Link
            className='mt-7 mb-2 hover:text-orange-700'
            to='/about-swipet'
            target='_blank'
          >
            About Swipet
          </Link>
          <Link
            className='mt-2 mb-2 hover:text-orange-700'
            to='/faq'
            target='_blank'
          >
            FAQs
          </Link>
          <Link
            className='mt-2 mb-2 hover:text-orange-700'
            to='/terms-and-conditions'
            target='_blank'
          >
            Terms & Conditions
          </Link>
          <Link
            className='mt-2 hover:text-orange-700'
            to='/privacy-policy'
            target='_blank'
          >
            Privacy Policy
          </Link>
        </div>
        <div className='flex py-8 flex-col justify-center items-center md:items-start'>
          <div className='font-bold text-2xl '>Contact</div>
          <div className='mt-7'>+63-905-478-9285</div>
          <div className='mt-2 mb-2'>swipet.contact@sun-asterisk.com</div>
          <div>Don Gil Garcia St, Cebu City</div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col justify-between items-center gap-10 my-11 md:flex-row'>
        <div className='w-80 flex justify-center gap-12 md:justify-start'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'>
            <img
              src='/images/Facebook.svg'
              className='h-6 hover:contrast-50'
              alt='instagram icon'
            />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
            <img
              src='/images/Instagram.svg'
              className='h-6 hover:contrast-50'
              alt='instagram icon'
            />
          </a>
          <a href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener'>
            <img
              src='/images/Twitter.svg'
              alt='twitter icon'
              className='h-6 hover:contrast-50'
            />
          </a>
        </div>
        <p className='w-[365px]'>
          Copyright © 2022 Swipet, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
