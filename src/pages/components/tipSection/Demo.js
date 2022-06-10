import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Demo = () => (
  <LazyLoadImage
    src='/images/Demo.gif'
    alt='demo'
    className='h-[500px] sm:static md:static lg:absolute'
  />
);

export default Demo;
