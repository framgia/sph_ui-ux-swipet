import React from 'react'

const DownloadButton = ({src , alt, upperText, lowerText, link}) => {
  return (
    <button
      className="bg-dark-ash text-white w-[160px] h-[48px] rounded p-2 font-bold mx-2.5 desktop:mx-0 desktop:mr-4"
      onClick={() => (window.location.href = link)}
    >
      <div className="flex items-center">
        <div className="mr-3.5">
          <img src={src} alt={alt} />
        </div>
        <div className="flex flex-col">
          <span className="text-[8px]">{upperText}</span>
          <span className="text-base">{lowerText}</span>
        </div>
      </div>
    </button>
  );
}

export default DownloadButton
