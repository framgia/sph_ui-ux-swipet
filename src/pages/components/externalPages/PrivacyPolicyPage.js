import React from 'react';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import {
  privacyPolicyConstant,
  policyMetaData,
} from '../../../utilities/constants';

const PrivacyPolicyPage = () => {
  const listItems = privacyPolicyConstant[11].text.map((list, index) => (
    <li key={index}>{list}</li>
  ));

  return (
    <ExternalPageTemplate title='Privacy Policy for Swipet'>
      <MetaDecorator
        title={policyMetaData.title}
        content={policyMetaData.content}
      />

      {privacyPolicyConstant.map((item, index) => {
        return (
          <div key={index}>
            {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
            {item.isH3Tag && (
              <h3 className='pb-4 text-2xl font-medium'>{item.text}</h3>
            )}
            {item.isUlTag && (
              <ul className='list-disc pl-8 pb-4'>{listItems}</ul>
            )}
          </div>
        );
      })}
    </ExternalPageTemplate>
  );
};

export default PrivacyPolicyPage;
