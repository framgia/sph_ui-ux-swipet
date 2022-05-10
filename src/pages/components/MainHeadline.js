import React from 'react';
import DownloadButton from './DownloadButton';

const MainHeadline = () => {
  return (
    <header
      className='bg-gradient-to-b from-orange-900 to-mocha-900 h-[710px] pt-[64px] 
        sm:pt-[38px] px-[20px] sm:px-[55px] lg:pt-[51px] lg:px-[100px] lg:h-[572px] xl:px-[200px] 2xl:px-[339px]'
    >
      <div className='w-[165px] h-[39px] sm:m-auto lg:w-[192px] lg:h-[48px]'>
        <img src='/images/LogoMix.svg' alt='swipet logo' />
      </div>
      <div className='flex flex-col relative items-center lg:items-start'>
        <h1
          className='flex flex-col self-start sm:self-auto sm:flex-row lg:flex-col text-white text-[40px]
            font-bold leading-[40px] pb-5 mt-[30px] lg:mt-[77px] lg:text-5xl lg:pb-4 2xl:text-[54px]'
        >
          Find your&nbsp;<span className='text-yellow-900'>best companion</span>
        </h1>
        <h3
          className='text-white leading-7 text-lg pb-4 sm:text-center sm:pb-[35px] 
            lg:text-left lg:w-[400px] lg:pb-12 xl:w-[545px] xl:text-xl 2xl:w-[580px]'
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
          className='absolute w-[290px] h-[311px] top-[328px] sm:w-[408px] sm:h-[446px] 
            sm:top-[300px] lg:right-0 lg:top-[40px] lg:w-[430px] lg:h-[507px] xl:w-[464px]'
        >
          <img
            className='origin-center rotate-12 lg:rotate-0'
            src='./images/Hero.png' alt=' a dog on the app'
          />
        </div>
      </div>
    </header>
  );
};

export default MainHeadline;
