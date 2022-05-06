import React from 'react';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import { termsAndConditionsConstant } from '../../../utilities/constants';
import { termServiceMetaData } from '../../../utilities/constants';

const TermsAndConditionsPage = () => {
  const allUlTags = termsAndConditionsConstant.filter(
    (list) => list.isUlTag === true
  );

  const allListText = allUlTags.map((list) => list.text);

  let listItem;
  for (let i = 0; i < allListText.length; i++) {
    listItem = allListText[i].map((list, index) => <li key={index}>{list}</li>);
  }

  return (
    <ExternalPageTemplate title='Terms and Conditions'>
      <MetaDecorator
        title={termServiceMetaData.title}
        content={termServiceMetaData.content}
      />

      {termsAndConditionsConstant.map((item, index) => {
        return (
          <div key={index}>
            {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
            {item.isH3Tag && (
              <h3 className='text-2xl pb-4 font-medium'>{item.text}</h3>
            )}
            {item.isUlTag && (
              <ul className='list-disc pl-8 pb-4'>{listItem}</ul>
            )}
          </div>
        );
      })}
    </ExternalPageTemplate>
  );
};

export default TermsAndConditionsPage;
