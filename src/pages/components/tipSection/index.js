import React from 'react';
import { useTranslation } from 'react-i18next';
import Tips from './Tips';
import IdeaIcon from '../icons/IdeaIcon';

const TipSection = () => {
  const { t } = useTranslation();

  return (
    <section className=' bg-white py-28 px-5 dark:bg-dark-ash-700 xl:px-[240px]'>
      <div className='mx-auto flex flex-col justify-between gap-x-2 lg:flex-row'>
        {/* Heading */}
        <div className='flex flex-col items-center lg:w-1/2 xl:items-start'>
          <div className='pb-[50px] md:w-[500px] lg:w-[450px] lg:pb-[77px] xl:w-[650px]'>
            <h2 className='heading-size leading-[65px] text-navy-900 dark:text-orange-900 lg:text-center xl:text-left'>
              {t('tipsHeading', { ns: 'features' })}
            </h2>
          </div>
          <div className='flex flex-row justify-center pb-[50px] lg:pb-[78px] xl:justify-start'>
            <IdeaIcon />
            <span className='ml-2 w-3/4 text-[24px] font-semibold text-navy-800 dark:text-orange-900 md:w-3/5'>
              {t('tipsSubHeading', { ns: 'features' })}
            </span>
          </div>
          <p className='pb-[60px] text-[20px] text-brown-900 dark:text-white md:w-9/12 lg:pb-0'>
            {t('tipsFirstPar', { ns: 'features' })}
            <br />
            <br />
            {t('tipsSecPar', { ns: 'features' })}
          </p>
        </div>

        {/* Button */}
        <div className='flex flex-1 flex-col justify-center'>
          <div className='flex justify-center pb-[30px] sm:pb-[55px]'>
            <button className='h-[38px] w-20 rounded-l-lg bg-navy-600 px-2 py-1 text-lg font-semibold text-white hover:underline dark:bg-orange-900'>
              {t('tipsBtnOne', { ns: 'features' })}
            </button>
            <button className='h-[38px] w-20 rounded-r-lg bg-navy-100 px-2 py-1 text-lg font-semibold text-dark-ash-900 hover:underline dark:bg-orange-200'>
              {t('tipsBtnTwo', { ns: 'features' })}
            </button>
          </div>
          <div className='flex flex-col items-center md:px-14'>
            <Tips />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipSection;
