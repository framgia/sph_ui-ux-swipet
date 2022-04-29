import React from "react";
import { Link } from "react-router-dom";
import DownloadButton from "./DownloadButton";

const FooterSection = () => {
  return (
    <footer>
      <section className="bg-gradient-to-t from-orange-900 via-orange-600 to-orange-500 h-[420px] lg:h-[420px]">
        <div className="background-image">
          <div>
            <p className="leading-[65px] text-center text-5xl text-white font-bold font-nunito">
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
      </section>

      <section className="flex flex-col px-[20px] sm:px-[20px] md:px-[55px] lg:px-[200px]">
        <div className="flex flex-col justify-between items-center md:flex-row sm:gap-12">
          <div className="flex flex-col justify-center items-center w-[300px] md:w-[250px] pb-6 md:pb-12 mt-7 md:mt-3 md:items-start">
            <img
              src="/images/LogoDarkFit.svg"
              alt="LogoDark"
              className="logo-dark-fit"
            />
            <p className="text-center md:text-left mt-8">
              Swipet is a mobile application that makes pet adoption fun and
              easier.
            </p>
          </div>
          <div className="flex py-8 flex-col justify-center items-center font-nunito text-text-header-dark-color md:items-start w-[300px]sm:w-[148px] sm:pl-[30px]">
            <div className="font-bold text-2xl">Links</div>
            <Link to="/faq" className="mt-7 hover:text-orange-700">
              FAQs
            </Link>
            <Link to="/about" className="mt-2 mb-2 hover:text-orange-700">
              About
            </Link>
            <Link to="/term-and-conditions" className="hover:text-orange-700">
              Term and Conditions
            </Link>
          </div>
          <div className="flex py-8 flex-col justify-center items-center font-nunito text-text-header-dark-color md:items-start">
            <div className="font-bold text-2xl ">Contact</div>
            <div className="mt-7">+63-905-478-9285</div>
            <div className="mt-2 mb-2">swipet.contact@sun-asterisk.com</div>
            <div>Don Gil Garcia St, Cebu City</div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col justify-between items-center gap-10 my-11 md:flex-row">
          <div className="w-80 flex justify-center gap-12 md:justify-start">
            <a href="https://www.facebook.com/" target="none">
              <img
                src="/images/Facebook.svg"
                className="media-icon"
                alt="instagram icon"
              />
            </a>
            <a href="https://www.instagram.com/" target="none">
              <img
                src="/images/Instagram.svg"
                className="media-icon"
                alt="instagram icon"
              />
            </a>
            <a href="https://www.twitter.com/" target="none">
              <img
                src="/images/Twitter.svg"
                alt="twitter icon"
                className="media-icon"
              />
            </a>
          </div>
          <p className="w-[365px]">
            Copyright © 2022 Swipet, Inc. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
