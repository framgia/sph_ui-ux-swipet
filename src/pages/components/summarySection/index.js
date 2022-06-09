import React from 'react';
import { useTranslation } from 'react-i18next';
import SummaryCard from './SummaryCard';

const SummarySection = () => {
  const { t } = useTranslation('features');
  const summaries = t('summaries');

  return (
    <section className=' bg-white py-28 dark:bg-dark-ash-700 sm:px-5 md:px-14'>
      <div className='mx-auto'>
        {/* Heading */}
        <div className='title-heading pb-[77px]'>
          <h2 className='heading-size dark:text-orange-900'>{t('summariesHeading')}</h2>
        </div>

        {/* Sub Heading */}
        <p className='mx-auto w-4/5 pb-[99px] text-center text-xl font-medium text-navy-800 dark:text-white lg:w-[650px]'>
          {t('summariesSubHeading')}
        </p>

        {/* Cards */}
        <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
          {summaries.map((summary, index) => (
            <SummaryCard summary={summary} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
