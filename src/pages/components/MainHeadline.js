import React from 'react'
import DownloadButton from './DownloadButton';

const MainHeadline = () => {
  return (
    <header
      className="bg-gradient-to-b from-orange-900 to-mocha-900 h-[710px] pt-[64px] 
        sm:pt-[38px] px-[20px] sm:px-[55px] lg:pt-[51px] lg:px-[200px] lg:h-[572px]"
    >
      <div className="w-[165px] h-[39px] sm:m-auto lg:w-[192px] lg:h-[48px]">
        <img src="/images/logo_mix.svg" alt="swipet logo" />
      </div>
      <div className="flex flex-col relative items-center lg:items-start">
        <h1
          className="flex flex-col self-start sm:self-auto sm:flex-row lg:flex-col text-white text-[40px]
            font-bold leading-[40px] pb-5 mt-[30px] lg:mt-[77px] lg:text-5xl lg:pb-4"
        >
          Find your&nbsp;<span className="text-yellow-900">best companion</span>
        </h1>
        <p
          className="text-white leading-7 text-lg pb-4 sm:text-center sm:pb-[35px] 
            lg:text-left lg:w-[545px] lg:pb-12"
        >
          Tired of dating apps? Your partner left you for someone else? Get a
          furbaby instead. With <span className="text-yellow-900">swipet</span>,
          you get the love you deserve.
        </p>
        <div className="flex justify-center">
          <DownloadButton
            src="./images/google_play.svg"
            alt="google play store"
            upperText="ANDROID APP ON"
            lowerText="Google Play"
            link="https://play.google.com/store"
          />
          <DownloadButton
            src="./images/app_store.svg"
            alt="apple app store"
            upperText="DOWNLOAD ON THE"
            lowerText="App Store"
            link="https://www.apple.com/ph/app-store/"
          />
        </div>
        <div
          className="absolute w-[349px] h-[376px] top-[328px] origin-center rotate-12 sm:w-[408px] sm:h-[446px] 
            sm:top-[300px] lg:right-0 lg:top-[40px] lg:rotate-0 lg:w-[464px] lg:h-[507px]"
        >
          <img src="./images/hero_full.png" alt=" a dog on the app" />
        </div>
      </div>
    </header>
  );
}

export default MainHeadline;
