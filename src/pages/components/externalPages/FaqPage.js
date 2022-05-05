import React from 'react';
import { Helmet } from 'react-helmet-async';
import ExternalPageTemplate from './ExternalPageTemplate';
import { faqConstant } from '../../../utilities/constants';

const FaqPage = () => {
  return (
    <ExternalPageTemplate title='FAQs About Pet Adoption'>
      <Helmet>
        <title>FAQs</title>
      </Helmet>

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
