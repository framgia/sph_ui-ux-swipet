import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';
import FooterContent from './FooterContent';

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <div className='h-[420px] bg-gradient-to-t from-orange-900 via-orange-600 to-orange-500 dark:bg-dark-ash-800 dark:bg-none lg:h-[420px]'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-20 bg-[url("/public/images/BottomBanner.svg")] dark:bg-[url("/public/images/BottomBannerDark.svg")]'>
        <div className='text-center font-bold text-white'>
          <h1 className='heading-size'>
            <Trans t={t} components={{ span: <span />, br: <br /> }}>
              footerBanner
            </Trans>
          </h1>
        </div>
        <div className='flex justify-center space-x-3 lg:space-x-4'>
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
      </div>
      <FooterContent />
    </div>
  );
};

export default FooterSection;
