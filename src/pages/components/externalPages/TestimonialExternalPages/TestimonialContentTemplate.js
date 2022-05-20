import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TestimonialMainContent from './TestimonialMainContent';

const TestimonialContentTemplate = ({ mode, description }) => (
  <Fragment>
    <header
      className={`${
        mode === 'light' ? '' : 'bg-dark-ash-800'
      } flex px-[20px] pt-[64px] sm:px-[55px] sm:pt-[38px] lg:px-[100px] lg:pt-[51px] xl:px-[200px] 2xl:px-[339px]`}
    >
      <LazyLoadImage
        src={`${mode === 'light' ? '/images/Avatar01.svg' : '/images/Avatar01dark.svg'}`}
        alt='profile'
        className='h-[71px]'
      />
      <div className='ml-7'>
        <h1 className='text-[32px] text-navy-900 dark:text-white '>{description.author}</h1>
        <p className='dark:text-white'>{description.posted}</p>
      </div>
    </header>
    <main
      className={`${mode === 'light' ? '' : 'bg-dark-ash-800'} px-[20px]
          text-lg text-brown-900 dark:text-white sm:px-[55px] sm:pt-[38px] md:px-[50px] lg:px-[100px] lg:pt-[51px] xl:px-[200px] 2xl:px-[339px]`}
    >
      <TestimonialMainContent description={description.description} altImage={description.author} />
    </main>
  </Fragment>
);

export default TestimonialContentTemplate;
