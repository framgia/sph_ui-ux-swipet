import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckCirledIcon from '../icons/CheckCircledIcon';

const Tips = () => {
  const { t } = useTranslation();
  const tips = t('tips', { ns: 'features' });

  return (
    <>
      <ul className='mb-7 list-none py-2 md:px-7'>
        {tips.map((tip, index) => (
          <li className='relative flex flex-row py-4' key={index}>
            <div className='absolute left-1 top-5 h-4 w-4 rounded-full bg-white' />
            <CheckCirledIcon />
            <span className='text ml-2 flex-1 text-2xl text-brown-900 dark:text-white'>{tip}</span>
          </li>
        ))}
      </ul>
      <p className='text-center text-3xl font-semibold text-brown-900 dark:text-white'>
        {t('tipsEnd', { ns: 'features' })}
      </p>
    </>
  );
};

export default Tips;
