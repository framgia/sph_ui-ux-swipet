import React from 'react';
import { useParams } from 'react-router-dom';
import { testimonials } from '../../../../utilities/constants';
import TestimonialHeaderContent from './TestimonialHeaderContent';
import TestimonialContentTemplate from './TestimonialContentTemplate';
import Testimonial from '../../testimonial';
import FooterContent from '../../footerSection/FooterContent';
import CookiePolicy from '../../CookiePolicy';
import ContactUs from '../../chatbot';
import NotFound from '../NotFound';
import { useTheme } from '../../../../utilities/contexts/ThemeContext';

const TestimonialContent = () => {
  const { name } = useParams('name');
  const authorData = testimonials.find(({ author }) => author === name);
  const { colorScheme } = useTheme();

  return (
    <div className='dark:bg-dark-ash-800'>
      {authorData === undefined ? (
        <NotFound />
      ) : (
        <>
          <ContactUs />
          <TestimonialHeaderContent item={authorData} colorScheme={colorScheme} />
          <TestimonialContentTemplate description={authorData} colorScheme={colorScheme} />
          <Testimonial testimonialCaption='You may also like' />
          <FooterContent />
          <CookiePolicy />
        </>
      )}
    </div>
  );
};

export default TestimonialContent;
