import React from 'react';
import { useTranslation } from 'react-i18next';

const Requirements = () => {
  const { t } = useTranslation();
  return (
    <div className='mx-12 rounded-lg border-2 bg-sky-100 p-4 pl-9'>
      <ul className='list-disc'>
        {t('requirementsList').map((req) => (
          <li className='pb-3' key={req.id}>
            {req.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requirements;
