import React from 'react';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import { faqConstant } from '../../../utilities/constants';
import { faqMetaData } from '../../../utilities/constants';

const FaqPage = () => {
  return (
    <ExternalPageTemplate title='FAQs About Pet Adoption'>
      <MetaDecorator title={faqMetaData.title} content={faqMetaData.content} />

      {faqConstant.map((item, index) => {
        return (
          <div key={index}>
            <p className={`${item.isBold && 'font-semibold'} pb-4 text-lg`}>
              {item.text}
            </p>
          </div>
        );
      })}
    </ExternalPageTemplate>
  );
};

export default FaqPage;
