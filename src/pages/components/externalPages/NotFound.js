import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../MetaDecorator';
import { notFoundMetaData } from '../../../utilities/constants';
import ThemeSelect from '../ThemeSelect';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='flex h-screen flex-col items-center justify-center px-5 dark:bg-dark-ash-800 md:px-[100px]'>
      <MetaDecorator title={notFoundMetaData.title} content={notFoundMetaData.content} />
      <div className='hidden'>
        <ThemeSelect />
      </div>
      <LazyLoadImage
        className='mb-12 w-[350px]'
        src='/images/Dog404.webp'
        alt='dog holding paper in mouth'
      />
      <h3 className='mb-9 text-center text-[40px] font-bold text-brown-900 dark:text-white  '>
        {t('404Message')}
      </h3>
      <button
        onClick={() => navigate('/')}
        className='primary-button dark:primary-button-dark text-lg hover:opacity-90'
      >
        {t('returnHomeButton')}
      </button>
    </div>
  );
};

export default NotFound;
