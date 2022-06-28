import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import MainHeadline from '../../MainHeadline';
import Chatbot from '../../chatbot';
import Testimonial from '../../testimonial';
import FooterSection from '../../footerSection';
import CookiePolicy from '../../CookiePolicy';
import { useTheme } from '../../../../utilities/contexts/ThemeContext';
import { availablePets } from '../../../../utilities/constants';
import PetInfoTemplate from './PetInfoTemplate';

const PetsInfoContent = () => {
  const { petName } = useParams('petName');
  const { t } = useTranslation('features');
  const { colorScheme } = useTheme();
  const PetData = availablePets.find(({ author }) => author === petName);

  return (
    <div>
      <MainHeadline colorScheme={colorScheme} isHome />
      <PetInfoTemplate data={PetData} />
      <Chatbot colorScheme={colorScheme} />
      <Testimonial
        isMain={false}
        gallery={availablePets}
        testimonialCaption={t('testimonialsHeading')}
        getLink='pet-info'
        name={PetData.author}
      />
      <FooterSection />
      <CookiePolicy />
    </div>
  );
};

export default PetsInfoContent;
