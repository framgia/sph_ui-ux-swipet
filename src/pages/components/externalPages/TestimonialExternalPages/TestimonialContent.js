import React from 'react';
import { useParams } from 'react-router-dom';
import { testimonials } from '../../../../utilities/constants';
import TestimonialHeaderContent from './TestimonialHeaderContent';
import TestimonialContentTemplate from './TestimonialContentTemplate';
import Testimonial from '../../testimonial';
import FooterContent from '../../footerSection/FooterContent';
import CookiePolicy from '../../CookiePolicy';
import ContactUs from '../../chatbot';

const TestimonialContent = () => {
  const { name } = useParams('name');
  const authorData = testimonials.find(({ author }) => author === name);

  return (
    <div>
      <ContactUs />
      <TestimonialHeaderContent item={authorData} />
      <TestimonialContentTemplate description={authorData} />
      <Testimonial testimonialCaption='You may also like' />
      <FooterContent />
      <CookiePolicy />
    </div>
  );
};

export default TestimonialContent;
