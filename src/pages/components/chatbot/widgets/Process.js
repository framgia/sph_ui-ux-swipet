import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  return (
    <div className='mx-12 rounded-lg border-2 bg-sky-100 p-5 pb-0 dark:border-none'>
      <ul>
        {t('adoptionProcessList').map((process) => (
          <Fragment key={process.id}>
            <h1 className='pb-2 font-bold'>{process.title}</h1>
            <li className='pb-5'>{process.text}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Process;
