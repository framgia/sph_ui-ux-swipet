import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tips from './Tips';
import IdeaIcon from '../icons/IdeaIcon';
import Demo from './Demo';

const TipSection = () => {
  const { t } = useTranslation('features');

  const [isDemo, setIsDemo] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isNotActive, setIsNotActive] = useState(true);

  useEffect(() => {
    if (!isDemo) {
      setIsActive(
        'h-[38px] w-20 rounded-l-lg bg-navy-600 px-2 py-1 text-lg font-semibold text-white hover:underline focus:bg-navy-600 focus:text-white',
      );
    } else {
      setIsActive(
        'h-[38px] w-20 rounded-l-lg bg-navy-100 px-2 py-1 text-lg font-semibold text-dark-ash-900 hover:underline focus:bg-navy-600 focus:text-white',
      );
    }
  }, [isDemo]);

  useEffect(() => {
    if (isDemo) {
      setIsNotActive(
        'h-[38px] w-20 rounded-r-lg bg-navy-600 px-2 py-1 text-lg font-semibold text-white hover:underline focus:bg-navy-600 focus:text-white',
      );
    } else {
      setIsNotActive(
        'h-[38px] w-20 rounded-r-lg bg-navy-100 px-2 py-1 text-lg font-semibold text-dark-ash-900 hover:underline focus:bg-navy-600 focus:text-white',
      );
    }
  }, [isDemo]);

  return (
    <section className=' bg-white py-28 px-5 dark:bg-dark-ash-700 xl:px-[240px]'>
      <div className='mx-auto flex flex-col justify-between gap-x-2 lg:flex-row'>
        {/* Heading */}
        <div className='flex flex-col items-center lg:w-1/2 xl:items-start'>
          <div className='pb-[50px] md:w-[500px] lg:w-[450px] lg:pb-[77px] xl:w-[650px]'>
            <h2 className='heading-size leading-[65px] text-navy-900 dark:text-orange-900 lg:text-center xl:text-left'>
              {t('tipsHeading')}
            </h2>
          </div>
          <div className='flex flex-row justify-center pb-[50px] lg:pb-[78px] xl:justify-start'>
            <IdeaIcon />
            <span className='ml-2 w-3/4 text-[24px] font-semibold text-navy-800 dark:text-orange-900 md:w-3/5'>
              {t('tipsSubHeading')}
            </span>
          </div>
          <p className='pb-[60px] text-[20px] text-brown-900 dark:text-white md:w-9/12 lg:pb-0'>
            {t('tipsFirstPar')}
            <br />
            <br />
            {t('tipsSecPar')}
          </p>
        </div>

        {/* Button */}
        <div className='justify-top flex flex-1 flex-col '>
          <div className='flex justify-center pb-[30px] pt-4 sm:pb-[35px]'>
            <button className={`${isActive}`} onClick={() => setIsDemo(false)}>
              {t('tipsBtnOne')}
            </button>
            <button className={`${isNotActive}`} onClick={() => setIsDemo(true)}>
              {t('tipsBtnTwo')}
            </button>
          </div>
          <div className='flex flex-col items-center md:px-14'>{isDemo ? <Demo /> : <Tips />}</div>
        </div>
      </div>
    </section>
  );
};

export default TipSection;
