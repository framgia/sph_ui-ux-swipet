import React from 'react';
import { useTranslation } from 'react-i18next';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import { policyMetaData } from '../../../utilities/constants';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const privacyPolicy = t('privacyPolicy', { ns: 'informations' });

  const listItems = privacyPolicy[11].text.map((list, index) => <li key={index}>{list}</li>);

  return (
    <ExternalPageTemplate title={t('privacyPolicyForSwipet')}>
      <MetaDecorator title={policyMetaData.title} content={policyMetaData.content} />

      {privacyPolicy.map((item, index) => (
        <div key={index}>
          {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
          {item.isH3Tag && <h3 className='pb-4 text-2xl font-medium'>{item.text}</h3>}
          {item.isUlTag && <ul className='list-disc pl-8 pb-4'>{listItems}</ul>}
        </div>
      ))}
    </ExternalPageTemplate>
  );
};

export default PrivacyPolicyPage;
