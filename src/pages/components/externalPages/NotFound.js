import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MetaDecorator from '../MetaDecorator';
import { notFoundMetaData } from '../../../utilities/constants';
import useDarkMode from '../../../utilities/hooks/useDarkMode';

const NotFound = () => {
  const navigate = useNavigate();
  const mode = useDarkMode();

  return (
    <div className='flex h-screen flex-col items-center justify-center px-5 dark:bg-dark-ash-800 md:px-[100px]'>
      <MetaDecorator title={notFoundMetaData.title} content={notFoundMetaData.content} />

      <LazyLoadImage
        className='mb-12 w-[350px]'
        src='/images/Dog404.webp'
        alt='dog holding paper in mouth'
      />
      <h3 className='mb-9 text-center text-[40px] font-bold text-brown-900'>
        Wooofs! We can't sniff out the page you're looking for.
      </h3>
      <button
        onClick={() => navigate('/')}
        className={`${
          mode === 'light' ? 'primary-button' : 'primary-button-dark'
        } text-lg hover:opacity-90`}
      >
        RETURN TO HOME
      </button>
    </div>
  );
};

export default NotFound;
