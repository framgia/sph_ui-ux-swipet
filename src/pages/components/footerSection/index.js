import React from "react";
import DownloadButton from "../DownloadButton";
import FooterContent from "./FooterContent";

const FooterSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-orange-900 via-orange-600 to-orange-500 h-[420px] lg:h-[420px]">
        <div className="bg-[url('/public/images/BottomBanner.svg')] w-full h-full flex justify-center items-center flex-col gap-20">
          <div>
            <p className="leading-[65px] text-center text-5xl text-white font-bold">
              Your <span className="text-yellow-900">bestfriend</span> is <br />
              waiting for <span className="text-yellow-900">you</span>
            </p>
          </div>
          <div className="flex justify-center">
            <DownloadButton
              src="./images/GooglePlay.svg"
              alt="google play store"
              upperText="ANDROID APP ON"
              lowerText="Google Play"
              link="https://play.google.com/store"
            />
            <DownloadButton
              src="./images/AppStore.svg"
              alt="apple app store"
              upperText="DOWNLOAD ON THE"
              lowerText="App Store"
              link="https://www.apple.com/ph/app-store/"
            />
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default FooterSection;
