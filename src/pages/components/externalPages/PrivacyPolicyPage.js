import React from 'react';
import { Helmet } from 'react-helmet-async';
import ExternalPageTemplate from './ExternalPageTemplate';
import { privacyPolicyConstant } from '../../../utilities/constants';

const PrivacyPolicyPage = () => {
  const listItems = privacyPolicyConstant[11].text.map((list, index) => (
    <li key={index}>{list}</li>
  ));

  return (
    <ExternalPageTemplate title='Privacy Policy for Swipet'>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>

      {privacyPolicyConstant.map((item, index) => {
        return (
          <div key={index}>
            {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
            {item.isH3Tag && (
              <h3 className='text-2xl pb-4 font-medium'>{item.text}</h3>
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
