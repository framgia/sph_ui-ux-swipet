import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TestimonialHeaderContent from './TestimonialHeaderContent';
import Chatbot from '../../chatbot';
import TestimonialContentTemplate from './TestimonialContentTemplate';
import Testimonial from '../../testimonial';
import FooterContent from '../../footerSection/FooterContent';
import CookiePolicy from '../../CookiePolicy';
import NotFound from '../NotFound';
import { useTheme } from '../../../../utilities/contexts/ThemeContext';

const TestimonialContent = () => {
  const { name } = useParams('name');
  const { t } = useTranslation();
  const authorData = t('testimonials', { ns: 'testimonials' }).find(
    ({ author }) => author === name,
  );
  const { colorScheme } = useTheme();

  return (
    <div className='dark:bg-dark-ash-800'>
      {authorData === undefined ? (
        <NotFound />
      ) : (
        <>
          <Chatbot colorScheme={colorScheme} />
          <TestimonialHeaderContent item={authorData} colorScheme={colorScheme} />
          <TestimonialContentTemplate description={authorData} colorScheme={colorScheme} />
          <Testimonial
            testimonialCaption={t('testimonialHeading2')}
            getLink='swipet-journeys'
            name={authorData.author}
          />
          <FooterContent />
          <CookiePolicy />
        </>
      )}
    </div>
  );
};

export default TestimonialContent;
