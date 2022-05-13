import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DownloadButton = ({ src, alt, upperText, lowerText, link }) => {
  return (
    <button
      className='h-[48px] w-[165px] rounded bg-dark-ash p-2 font-bold text-white'
      onClick={() => window.open(link, '_blank')}
    >
      <div className='flex items-center'>
        <div className='mr-3.5'>
          <LazyLoadImage src={src} alt={alt} />
        </div>
        <div className='flex flex-col text-left'>
          <span className='text-[8px]'>{upperText}</span>
          <span className='text-base'>{lowerText}</span>
        </div>
      </div>
    </button>
  );
};

export default DownloadButton;
