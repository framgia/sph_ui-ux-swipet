import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import DownloadButton from './DownloadButton';
import ThemeSelect from './ThemeSelect';
import AnimationForHeroImage from './animation';
import SwipeAnimation from './swipe';

const MainHeadline = ({ colorScheme, isHome, featureData = {} }) => {
  const { t } = useTranslation();
  const { title, description } = featureData;

  return (
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
      <div className={`relative flex flex-col items-center ${!isHome && 'md:pt-8'} lg:items-start`}>
        <h1
          className={`heading-size mt-12 flex flex-col self-start pb-4 font-bold
                text-white md:flex-row md:self-auto md:text-center lg:flex-col lg:pb-4 lg:text-left ${
                  !isHome && 'lg:w-2/3'
                }`}
        >
          {isHome ? (
            <Trans t={t} components={{ span: <span /> }}>
              mainHeading
            </Trans>
          ) : (
            title
          )}
        </h1>
        <h3
          className='pb-12 text-lg text-white sm:text-xl md:text-center
                lg:w-[500px] lg:pb-12 lg:text-left xl:w-[416px] xl:text-xl 2xl:w-[500px] 2xl:text-2xl 3xl:w-[600px]'
        >
          {isHome ? <Trans components={{ span: <span /> }}>subHeading</Trans> : description}
        </h3>
        <div className='flex justify-center space-x-5 sm:space-x-8'>
          <DownloadButton
            src='/images/GooglePlay.svg'
            alt='google play store'
            upperText='ANDROID APP ON'
            lowerText='Google Play'
            link='https://play.google.com/store'
          />
          <DownloadButton
            src='/images/AppStore.svg'
            alt='apple app store'
            upperText='DOWNLOAD ON THE'
            lowerText='App Store'
            link='https://www.apple.com/ph/app-store/'
          />
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className={`absolute top-[400px] h-[311px] w-[290px] sm:top-[384px] sm:h-[446px] sm:w-[408px]
              md:top-[312px] lg:right-0 ${
                isHome ? 'lg:top-[0px]' : 'lg:top-[0px]'
              } lg:h-[507px] lg:w-[430px] xl:w-[464px]`}
        >
          <div className='flex justify-center w-[100%] h-[100%]' >{ isHome ? <AnimationForHeroImage /> : <SwipeAnimation /> }</div>
        </div>
      </div>
    </header>
  );
};

export default MainHeadline;
