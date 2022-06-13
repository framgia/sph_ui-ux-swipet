import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialCard = ({ item, isMain }) => (
  <figure className='relative py-5 pr-5 pb-5 duration-700 hover:scale-105'>
    <Link to={`/swipet-journeys/${item.author}`} target='none'>
      {/* Image */}
      <img
        className='h-[183px] w-full rounded-lg  object-cover drop-shadow-md md:h-[218px] lg:h-[186px] xl:h-[390px]'
        src={item.src}
        alt={item.name}
      />
      {/* Content */}
      <figcaption className='absolute left-0 right-0 bottom-5 mr-5 rounded-lg bg-gradient-to-t from-black pb-5 text-white'>
        {isMain && <p className='mx-4 mb-4 text-sm font-semibold xl:text-lg'>{item.text}</p>}
        <p className={`mx-4 ${!isMain && 'text-center'} font-allison text-[32px]`}>{item.author}</p>
      </figcaption>
    </Link>
  </figure>
);

export default TestimonialCard;
