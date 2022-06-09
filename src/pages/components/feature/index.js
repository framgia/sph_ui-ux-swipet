import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';

const FeatureSection = ({ hasHeading, isHome, features = {} }) => {
  const { t } = useTranslation();
  const list = isHome ? t('features', { ns: 'features' }) : features;

  return (
    <section
      className={`pb-[70px] pt-24 dark:bg-dark-ash-800 sm:pt-16 ${
        hasHeading ? 'lg:pt-0' : 'lg:pt-16'
      }`}
    >
      {/* Heading */}
      {hasHeading && (
        <div className='title-heading pt-32 sm:pt-72 md:pt-56 lg:pt-40'>
          <h2 className='heading-size dark:text-orange-900'>{t('featureHeading')}</h2>
        </div>
      )}
      {/* Cards */}
      {list.map((item, index) => (
        <FeatureCard item={item} key={index} index={index} length={list.length} isHome={isHome} />
      ))}
    </section>
  );
};

export default FeatureSection;
