import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const CookiePolicy = () => {
  const { t } = useTranslation();
  const [isPopUp, setIsPopUp] = useState(true);

  const onClickNoted = () => {
    Cookies.set('isNotifiedOnPolicy', 1);
    setIsPopUp(false);
  };

  useEffect(() => {
    if (Cookies.get('isNotifiedOnPolicy')) {
      setIsPopUp(false);
    } else {
      setIsPopUp(true);
    }
  }, []);

  return (
    <div
      className={`${
        isPopUp ? 'block' : 'hidden'
      } fixed bottom-0 z-20 border-t-2 bg-white py-4 px-2 text-justify leading-6 dark:border-t-dark-ash-700 dark:bg-dark-ash-800 dark:text-white md:px-12 lg:py-10 lg:px-[200px]`}
    >
      <p className='text-sm lg:text-base'>
        <Trans
          t={t}
          components={{
            Link: (
              <Link
                to='/privacy-policy'
                className='text-navy-900 hover:underline dark:text-navy-100'
                target='_blank'
              />
            ),
          }}
        >
          cookieP1
        </Trans>
      </p>
      <div className='mt-6 block items-center justify-start md:flex lg:justify-between'>
        <p className='text-sm lg:text-base'>{t('cookieP2')}</p>
        <button className='primary-button ml-0 mt-4 md:ml-8 md:mt-0' onClick={onClickNoted}>
          {t('agreeButton')}
        </button>
      </div>
    </div>
  );
};

export default CookiePolicy;
