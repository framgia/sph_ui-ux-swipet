import React from 'react';
import { useParams } from 'react-router-dom';
import MainHeadline from '../components/MainHeadline';
import NotFound from '../components/externalPages/NotFound';
import FooterSection from '../components/footerSection';
import { features, availablePets } from '../../utilities/constants';
import { useTheme } from '../../utilities/contexts/ThemeContext';
import FeatureSection from '../components/feature';
import SubscriptionSection from '../components/subscriptionSection';
import SummarySection from '../components/summarySection';
import TipSection from '../components/tipSection';
import Testimonial from '../components/testimonial';

const FeatureDetail = () => {
  const { name } = useParams('name');
  const { colorScheme } = useTheme();

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
            testimonialCaption='Go beyond boundaries'
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
    </>
  );
};

export default FeatureDetail;
