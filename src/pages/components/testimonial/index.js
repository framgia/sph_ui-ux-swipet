import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PreviousIcon from '../icons/PreviousIcon';
import NextIcon from '../icons/NextIcon';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../../utilities/constants';

const Testimonial = () => {
  // eslint-disable-next-line
  let sliderRef = useRef < Slider > null;
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3.5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <section className='bg-white'>
      {/* Heading */}
      <div className='title-heading py-20'>
        <h2>Start a life-changing journey</h2>
      </div>
      {/* Carousel */}
      <div className='z-0 pb-20 sm:pl-14 lg:pl-[200px]'>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </Slider>
        {/* Controls */}
        <button
          className='group slider-control'
          onClick={() => sliderRef.slickPrev()}
        >
          <PreviousIcon />
        </button>
        <button
          className='group slider-control'
          onClick={() => sliderRef.slickNext()}
        >
          <NextIcon />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
