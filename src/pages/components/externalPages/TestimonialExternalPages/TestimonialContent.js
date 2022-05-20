import React from 'react';
import { useParams } from 'react-router-dom';
import { testimonials } from '../../../../utilities/constants';
import TestimonialHeaderContent from './TestimonialHeaderContent';
import TestimonialContentTemplate from './TestimonialContentTemplate';
import Testimonial from '../../testimonial';
import FooterContent from '../../footerSection/FooterContent';
import CookiePolicy from '../../CookiePolicy';
import ContactUs from '../../chatbot';
import useDarkMode from '../../../../utilities/hooks/useDarkMode';

const TestimonialContent = () => {
  const { name } = useParams('name');
  const authorData = testimonials.find(({ author }) => author === name);
  const mode = useDarkMode();

  return (
    <div>
      <ContactUs />
      <TestimonialHeaderContent item={authorData} mode={mode} />
      <TestimonialContentTemplate description={authorData} mode={mode} />
      <Testimonial testimonialCaption='You may also like' />
      <FooterContent mode={mode} />
      <CookiePolicy />
    </div>
  );
};

export default TestimonialContent;
