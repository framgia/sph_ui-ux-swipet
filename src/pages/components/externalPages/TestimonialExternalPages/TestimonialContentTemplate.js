import React, { Fragment } from 'react';
import TestimonialMainContent from './TestimonialMainContent';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TestimonialContentTemplate = ({ description }) => {
  return (
    <Fragment>
      <header className='flex pt-[64px] sm:pt-[38px] px-[20px] sm:px-[55px] lg:pt-[51px] lg:px-[100px] xl:px-[200px] 2xl:px-[339px]'>
        <LazyLoadImage
          src='/images/Avatar01.svg'
          alt='profile'
          className='h-[71px]'
        />
        <div className='ml-7'>
          <h1 className='text-[32px] text-navy-900'>{description.author}</h1>
          <p>{description.posted}</p>
        </div>
      </header>
      <main
        className='md:px-[50px] text-lg text-brown-900
          border-b border-brown-90 sm:pt-[38px] px-[20px] sm:px-[55px] lg:pt-[51px] lg:px-[100px] xl:px-[200px] 2xl:px-[339px]'
      >
        <TestimonialMainContent
          description={description.description}
          altImage={description.author}
        />
      </main>
    </Fragment>
  );
};

export default TestimonialContentTemplate;
