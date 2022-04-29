import React from 'react';

const FeatureCard = ({ item, index, length }) => {
  const displayPaws = () => {
    if (index < length - 1) {
      return (
        <div
          className={`hidden md:block absolute ${
            index % 2 !== 0
              ? '-bottom-32 lg:-bottom-36 xl:-bottom-48 left-[100px] lg:left-[150px] xl:left-[300px]'
              : 'left-[200px] xl:left-[300px] 2xl:-bottom-[17rem]'
          }`}
        >
          <img
            className={`w-1/2 h-1/2 ${index % 2 !== 0 ? '' : '-rotate-90'}`}
            src="/images/PawTrail.svg"
            alt=""
          />
        </div>
      );
    }
  };

  return (
    <div className="px-5 sm:px-14 lg:px-[200px]">
      {/* feature */}
      <div className="relative mt-[50px] sm:mt-24 lg:mt-[144px]">
        <div
          className={`container flex flex-col ${
            item.isReverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
          } items-center justify-center gap-x-40 md:gap-x-10`}
        >
          {/* Image */}
          <div className="flex flex-1 justify-center mb-[15px] sm:mb-0">
            <img
              className="w-3/4 h-3/4 lg:w-5/6 lg:h-5/6 z-10"
              src={item.src}
              alt={item.name}
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <h3 className="text-center sm:text-[32px] sm:text-left md:mb-4 mb-0 font-semibold text-navy-900">
              {item.title}
            </h3>
            <p className="sm:text-xl md:text-left text-justify md:w-full text-brown-900">
              {item.description}
            </p>
          </div>
        </div>
        {displayPaws()}
      </div>
    </div>
  );
};

export default FeatureCard;
