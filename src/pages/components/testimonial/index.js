import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PreviousIcon from '../icons/PreviousIcon';
import NextIcon from '../icons/NextIcon';
import TestimonialCard from './TestimonialCard';

const Testimonial = ({ testimonialCaption, isMain = true, gallery = {} }) => {
  const { t } = useTranslation();
  let sliderRef = useRef < Slider > null;

  const { name } = useParams('name');

  const list = isMain ? t('testimonials', { ns: 'testimonials' }) : gallery;

  const settings = {
    className: 'hover:scale-95 py-5 duration-700',
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: gallery.length <= 3 ? gallery.length : 3.5,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: gallery.length <= 2 ? gallery.length : 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: gallery.length <= 1 ? gallery.length : 1.5,
        },
      },
    ],
  };

  return (
    <section className='bg-white pl-5 dark:bg-dark-ash-700 sm:px-0'>
      {/* Heading */}
      <div className='ml-0 mr-5 py-20 sm:mx-auto sm:w-[452px] xl:w-[600px] 3xl:w-full'>
        <h2 className='heading-size dark:text-orange-900'>
          {testimonialCaption || t('testimonialHeading')}
        </h2>
      </div>

      {/* Sub Heading */}
      {!isMain && (
        <p className='mx-auto w-4/5 pb-[99px] text-center text-[24px] font-medium text-brown-900 sm:w-9/12 3xl:w-3/5'>
          Help find these pets new home and refer this app to your friends or you can become a{' '}
          <span className='font-bold'>Swipey</span>- a contributor to the adoption community and be
          one of our sponsors.
        </p>
      )}

      {/* Carousel */}
      <div className='z-0 pb-20 sm:pl-14 lg:pl-[200px]'>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {list.map(
            (item, index) =>
              name !== item.author && <TestimonialCard key={index} item={item} isMain={isMain} />,
          )}
        </Slider>
        {/* Controls */}
        <button className='slider-control group' onClick={() => sliderRef.slickPrev()}>
          <PreviousIcon />
        </button>
        <button className='slider-control group' onClick={() => sliderRef.slickNext()}>
          <NextIcon />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
