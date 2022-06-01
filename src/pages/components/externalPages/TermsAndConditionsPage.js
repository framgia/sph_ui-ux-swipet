import React from 'react';
import { useTranslation } from 'react-i18next';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import { termServiceMetaData } from '../../../utilities/constants';

const TermsAndConditionsPage = () => {
  const { t } = useTranslation();
  const termsAndConditions = t('termsAndConditions', { ns: 'informations' });

  const allUlTags = termsAndConditions.filter((list) => list.isUlTag === true);

  const allListText = allUlTags.map((list) => list.text);

  let listItem;
  for (let i = 0; i < allListText.length; i++) {
    listItem = allListText[i].map((list, index) => <li key={index}>{list}</li>);
  }

  return (
    <ExternalPageTemplate title={t('terms&Conditions')}>
      <MetaDecorator title={termServiceMetaData.title} content={termServiceMetaData.content} />

      {termsAndConditions.map((item, index) => (
        <div key={index}>
          {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
          {item.isH3Tag && <h3 className='pb-4 text-2xl font-medium'>{item.text}</h3>}
          {item.isUlTag && <ul className='list-disc pl-8 pb-4'>{listItem}</ul>}
        </div>
      ))}
    </ExternalPageTemplate>
  );
};

export default TermsAndConditionsPage;
