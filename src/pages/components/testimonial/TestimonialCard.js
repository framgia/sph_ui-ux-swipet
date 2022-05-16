import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TestimonialCard = ({ item }) => {
  return (
    <figure className='relative pr-5 pb-5'>
      {/* Image */}
      <LazyLoadImage
        className='w-full rounded-lg object-cover drop-shadow-md'
        src={item.src}
        alt={item.name}
      />
      {/* Content */}
      <figcaption className='absolute left-0 right-0 bottom-5 mr-5 rounded-lg bg-gradient-to-t from-black pb-5 text-white'>
        <p className='mx-4 mb-4 text-sm font-semibold xl:text-lg'>
          {item.text}
        </p>
        <p className='mx-4 font-allison text-[32px]'>{item.author}</p>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
