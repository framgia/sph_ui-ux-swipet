import React from 'react';

const FeatureCard = () => {
  return (
    <div className="lg:px-[200px] md:px-14 px-5">
      {/* feature profile */}
      <div className="mt-[144px] md:mt-24 sm:mt-[50px]">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-x-40 md:gap-x-10">
          {/* Image */}
          <div className="flex flex-1 justify-center mb-[15px] mg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/images/FeatureProfile.png"
              alt="profile"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <h2 className="lg:text-[32px] sm:text-[28px] sm:text-center md:mb-4 mb-0 font-semibold text-navy-900">
              Let them know you
            </h2>
            <p className="text-base md:text-left text-justify md:w-full text-brown-900">
              Flex your best qualities on your profile. Show your interests. Let
              it scream, “I’m the best fur parent in the whole world!”.
            </p>
          </div>
        </div>
      </div>

      {/* feature match */}
      <div className="mt-[144px] md:mt-20 sm:mt-[60px]">
        <div className="container flex flex-col md:flex-row-reverse items-center justify-center gap-x-40 md:gap-x-10">
          {/* Image */}
          <div className="flex flex-1 justify-center mb-[15px] mg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/images/FeatureMatch.png"
              alt="match"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <h2 className="lg:text-[32px] sm:text-[28px] md:mb-4 mb-0 font-semibold text-navy-900">
              Match with your perfect buddy
            </h2>
            <p className="text-base md:text-left text-justify md:w-full text-brown-900">
              Swipe to the right for the pet you like until you get your match.
            </p>
          </div>
        </div>
      </div>

      {/* feature chat */}
      <div className="mt-[144px] md:mt-20 sm:mt-[60px]">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-x-40 md:gap-x-10">
          {/* Image */}
          <div className="flex flex-1 justify-center mb-[15px] mg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/images/FeatureChat.png"
              alt="chat"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <h2 className="lg:text-[32px] sm:text-[28px] md:mb-4 mb-0 font-semibold text-navy-900">
              Get to know them
            </h2>
            <p className="text-base md:text-left text-justify md:w-full text-brown-900 ">
              Chat with the keeper of your match pet, and learn more about them.
            </p>
          </div>
        </div>
      </div>

      {/* feature adopt */}
      <div className="mt-[144px] md:mt-20 sm:mt-[60px]">
        <div className="container flex flex-col md:flex-row-reverse items-center justify-center gap-x-40 md:gap-x-10">
          {/* Image */}
          <div className="flex flex-1 justify-center mb-[15px] mg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/images/FeatureAdopt.png"
              alt="adopt"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <h2 className="lg:text-[32px] sm:text-[28px] md:mb-4 mb-0 font-semibold text-navy-900">
              Adopt
            </h2>
            <p className="text-base md:text-left text-justify md:w-full text-brown-900 ">
              Adopt, don’t shop. Make a deal with the pet keeper, and become a
              certified fur parent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
