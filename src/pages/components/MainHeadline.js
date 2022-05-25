import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import DownloadButton from './DownloadButton';
import ThemeSelect from './ThemeSelect';

const MainHeadline = ({ colorScheme }) => (
  <header
    className='h-[710px] bg-gradient-to-b from-orange-900 to-mocha-900 px-5 pt-14 dark:bg-dark-ash-900
    dark:bg-none sm:px-8 md:px-14 lg:h-[572px] xl:px-[200px] 2xl:px-[240px] 3xl:px-[320px]'
  >
    <div className='flex items-center justify-between'>
      <Link to='/'>
        <LazyLoadImage
          className='h-[39px] w-[165px] lg:h-[48px] lg:w-[192px]'
          src={`${colorScheme === 'light' ? '/images/LogoMix.svg' : '/images/LogoDarkTheme.svg'}`}
          alt='swipet logo'
        />
      </Link>
      <ThemeSelect />
    </div>
    <div className='relative flex flex-col items-center lg:items-start'>
      <h1
        className='heading-size mt-12 flex flex-col self-start pb-4 font-bold
              text-white md:flex-row md:self-auto lg:flex-col lg:pb-4'
      >
        Find your&nbsp;
        <span className='text-yellow-900 dark:text-orange-900'>best companion</span>
      </h1>
      <h3
        className='pb-12 text-lg text-white sm:text-xl md:text-center
              lg:w-[500px] lg:pb-12 lg:text-left xl:w-[416px] xl:text-xl 2xl:w-[500px] 2xl:text-2xl 3xl:w-[600px]'
      >
        Tired of dating apps? Your partner left you for someone else? Get a furbaby instead. With
        {' '}
        <span className='text-yellow-900 dark:text-orange-900'>swipet</span>
        , you get the love you
        deserve.
      </h3>
      <div className='flex justify-center space-x-5 sm:space-x-8'>
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
        className='absolute top-[400px] h-[311px] w-[290px] sm:top-[384px] sm:h-[446px] sm:w-[408px]
              md:top-[312px] lg:right-0 lg:top-[40px] lg:h-[507px] lg:w-[430px] xl:w-[464px]'
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

export default MainHeadline;
