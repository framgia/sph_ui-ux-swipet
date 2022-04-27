import React from 'react';

const FeatureCard = ({ item }) => {
  return (
    <div className="px-5 sm:px-14 lg:px-[200px]">
      {/* feature */}
      <div className="mt-[50px] sm:mt-24 lg:mt-[144px]">
        <div
          className={`container flex flex-col ${
            item.isReverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
          } items-center justify-center gap-x-40 md:gap-x-10`}
        >
          {/* Image */}
          <div className="flex flex-1 justify-center mb-[15px] sm:mb-0">
            <img
              className="w-3/4 h-3/4 lg:w-5/6 lg:h-5/6"
              src="/images/FeatureProfile.png"
              alt="profile"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <h2 className="text-[28px] text-center sm:text-[32px] sm:text-left md:mb-4 mb-0 font-semibold text-navy-900">
              {item.title}
            </h2>
            <p className="text-base sm:text-xl md:text-left text-justify md:w-full text-brown-900">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
