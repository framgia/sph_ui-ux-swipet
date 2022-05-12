import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MetaDecorator from '../MetaDecorator';
import { notFoundMetaData } from '../../../utilities/constants';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col justify-center items-center px-5 md:px-[100px]'>
      <MetaDecorator
        title={notFoundMetaData.title}
        content={notFoundMetaData.content}
      />

      <LazyLoadImage
        className='w-[350px] mb-12'
        src='/images/Dog404.webp'
        alt='dog holding paper in mouth'
      />
      <h3 className='text-center text-[40px] font-bold text-brown-900 mb-9'>
        Wooofs! We can't sniff out the page you're looking for.
      </h3>
      <button
        onClick={() => navigate('/')}
        className='primary-button text-lg hover:opacity-90'
      >
        RETURN TO HOME
      </button>
    </div>
  );
};

export default NotFound;
