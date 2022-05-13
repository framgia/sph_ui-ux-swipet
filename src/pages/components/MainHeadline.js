import React from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './DownloadButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainHeadline = () => {
  return (
    <header
      className='h-[710px] bg-gradient-to-b from-orange-900 to-mocha-900 px-[20px] 
        pt-[64px] sm:px-[55px] sm:pt-[38px] lg:h-[572px] lg:px-[100px] lg:pt-[51px] xl:px-[200px] 2xl:px-[339px]'
    >
      <div className='h-[39px] w-[165px] sm:m-auto lg:h-[48px] lg:w-[192px]'>
        <Link to='/'>
          <LazyLoadImage src='/images/LogoMix.svg' alt='swipet logo' />
        </Link>
      </div>
      <div className='relative flex flex-col items-center lg:items-start'>
        <h1
          className='mt-[30px] flex flex-col self-start pb-5 text-[40px] font-bold leading-[40px]
            text-white sm:flex-row sm:self-auto lg:mt-[77px] lg:flex-col lg:pb-4 lg:text-5xl 2xl:text-[54px]'
        >
          Find your&nbsp;<span className='text-yellow-900'>best companion</span>
        </h1>
        <h3
          className='pb-4 text-lg leading-7 text-white sm:pb-[35px] sm:text-center 
            lg:w-[400px] lg:pb-12 lg:text-left xl:w-[545px] xl:text-xl 2xl:w-[580px]'
        >
          Tired of dating apps? Your partner left you for someone else? Get a
          furbaby instead. With <span className='text-yellow-900'>swipet</span>,
          you get the love you deserve.
        </h3>
        <div className='flex justify-center space-x-3 lg:space-x-4'>
          <DownloadButton
            src='./images/GooglePlay.svg'
            alt='google play store'
            upperText='ANDROID APP ON'
            lowerText='Google Play'
            link='https://play.google.com/store'
          />
          <DownloadButton
            src='./images/AppStore.svg'
            alt='apple app store'
            upperText='DOWNLOAD ON THE'
            lowerText='App Store'
            link='https://www.apple.com/ph/app-store/'
          />
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='absolute top-[328px] h-[311px] w-[290px] sm:top-[300px] sm:h-[446px] 
            sm:w-[408px] lg:right-0 lg:top-[40px] lg:h-[507px] lg:w-[430px] xl:w-[464px]'
        >
          <LazyLoadImage
            className='origin-center rotate-12 lg:rotate-0'
            src='./images/Hero.webp'
            alt=' a dog on the app'
          />
        </div>
      </div>
    </header>
  );
};

export default MainHeadline;
