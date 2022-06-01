import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  const { t } = useTranslation();
  return (
    <section className='pb-[70px] pt-24 dark:bg-dark-ash-800 sm:pt-16 lg:pt-0'>
      {/* Heading */}
      <div className='title-heading'>
        <h2 className='heading-size dark:text-orange-900'>{t('featureHeading')}</h2>
      </div>
      {/* Cards */}
      {t('features').map((item, index) => (
        <FeatureCard item={item} key={index} index={index} length={t('features').length} />
      ))}
    </section>
  );
};

export default FeatureSection;
