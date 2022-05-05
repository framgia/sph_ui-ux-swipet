import React from 'react';
import DownloadButton from '../DownloadButton';
import FooterContent from './FooterContent';

const FooterSection = () => {
  return (
    <div>
      <div className='bg-gradient-to-t from-orange-900 via-orange-600 to-orange-500 h-[420px] lg:h-[420px] mx-2'>
        <div className="bg-[url('/public/images/BottomBanner.svg')] w-full h-full flex justify-center items-center flex-col gap-10 sm:gap-20">
          <p className='leading-[50px] sm:leading-[65px] text-center text-4xl sm:text-5xl text-white font-bold '>
            Your <span className='text-yellow-900'>bestfriend</span> is <br />
            waiting for <span className='text-yellow-900'>you</span>
          </p>
          <div className='flex flex-col sm:flex-row justify-center space-x-0 space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4'>
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
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default FooterSection;
