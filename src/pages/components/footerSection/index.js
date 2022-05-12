import React from 'react';
import DownloadButton from '../DownloadButton';
import FooterContent from './FooterContent';

const FooterSection = () => {
  return (
    <div>
      <div className='h-[420px] bg-gradient-to-t from-orange-900 via-orange-600 to-orange-500 lg:h-[420px]'>
        <div className="flex h-full w-full flex-col items-center justify-center gap-20 bg-[url('/public/images/BottomBanner.svg')]">
          <div>
            <p className='text-center text-[44px] font-bold leading-[50px] text-white sm:text-5xl sm:leading-[65px]'>
              Your <span className='text-yellow-900'>bestfriend</span> is <br />
              waiting for <span className='text-yellow-900'>you</span>
            </p>
          </div>
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
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default FooterSection;
