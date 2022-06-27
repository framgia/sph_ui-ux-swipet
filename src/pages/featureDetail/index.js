import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Chatbot from '../components/chatbot';
import MainHeadline from '../components/MainHeadline';
import NotFound from '../components/externalPages/NotFound';
import FooterSection from '../components/footerSection';
import { availablePets } from '../../utilities/constants';
import { useTheme } from '../../utilities/contexts/ThemeContext';
import FeatureSection from '../components/feature';
import SubscriptionSection from '../components/subscriptionSection';
import SummarySection from '../components/summarySection';
import TipSection from '../components/tipSection';
import Testimonial from '../components/testimonial';
import CookiePolicy from '../components/CookiePolicy';

const FeatureDetail = () => {
  const { t } = useTranslation('features');
  const { name } = useParams('name');
  const { colorScheme } = useTheme();
  const features = t('features');

  const featureData = features.find((feature) => feature.name === name);

  const miscComponent = () => {
    switch (featureData.name) {
      case 'profile':
        return <SubscriptionSection />;
      case 'match':
        return <SummarySection />;
      case 'chat':
        return <TipSection />;
      case 'adopt':
        return (
          <Testimonial
            isMain={false}
            gallery={availablePets}
            testimonialCaption={t('testimonialsHeading')}
            getLink='pet-info'
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {featureData === undefined ? (
        <NotFound />
      ) : (
        <>
          <MainHeadline colorScheme={colorScheme} isHome={false} featureData={featureData} />
          <FeatureSection hasHeading={false} isHome={false} features={featureData.subFeatures} />
          {miscComponent()}
          <FooterSection />
        </>
      )}
      <CookiePolicy />
      <Chatbot colorScheme={colorScheme} />
    </>
  );
};

export default FeatureDetail;
