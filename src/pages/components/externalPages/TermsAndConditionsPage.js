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

  const listItems = [];
  for (let i = 0; i < allListText.length; i++) {
    const listItem = allListText[i].map((list, index) => <li key={index}>{list}</li>);
    listItems.push(listItem);
  }

  const checkIndex = (i) => {
    switch (i) {
      case 10:
        return 0;
      case 15:
        return 1;
      case 19:
        return 2;
      case 22:
        return 3;
      case 27:
        return 4;
      case 42:
        return 5;
      default:
        return null;
    }
  };

  return (
    <ExternalPageTemplate title={t('terms&Conditions')}>
      <MetaDecorator title={termServiceMetaData.title} content={termServiceMetaData.content} />

      {termsAndConditions.map((item, i) => (
        <div key={i}>
          {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
          {item.isH3Tag && <h3 className='pb-4 text-2xl font-medium'>{item.text}</h3>}
          {item.isUlTag && <ul className='list-disc pl-8 pb-4'>{listItems[checkIndex(i)]}</ul>}
        </div>
      ))}
    </ExternalPageTemplate>
  );
};

export default TermsAndConditionsPage;
