import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Trans, useTranslation } from 'react-i18next';
import PreviousIcon from '../icons/PreviousIcon';
import NextIcon from '../icons/NextIcon';
import TestimonialCard from './TestimonialCard';

const Testimonial = ({ testimonialCaption, isMain = true, gallery = {}, getLink, name }) => {
  const { t } = useTranslation();
  let sliderRef = useRef < Slider > null;

  const list = isMain ? t('testimonials', { ns: 'testimonials' }) : gallery;

  const settings = {
    className: 'hover:scale-95 py-5 duration-700',
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: list.length < 4 ? list.length : 4,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: list.length < 3 ? list.length : 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: list.length < 2 ? list.length : 2,
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
        <p className='mx-auto pb-[60px] pr-5 text-center text-[24px] font-medium text-brown-900 dark:text-white sm:w-9/12 sm:pr-0 3xl:w-3/5'>
          <Trans t={t} ns='features' components={{ span: <span /> }}>
            testimonialSubHeading
          </Trans>
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
              name !== item.author && (
                <TestimonialCard key={index} item={item} isMain={isMain} onGetLink={getLink} />
              ),
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
