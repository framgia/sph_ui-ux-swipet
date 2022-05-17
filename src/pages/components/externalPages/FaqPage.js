import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import CaretDown from '../icons/CaretDown';
import { faqConstant } from '../../../utilities/constants';
import { faqMetaData } from '../../../utilities/constants';

const FaqPage = () => {
  return (
    <ExternalPageTemplate title='FAQs About Pet Adoption'>
      <MetaDecorator title={faqMetaData.title} content={faqMetaData.content} />

      <Accordion allowZeroExpanded allowMultipleExpanded>
        {faqConstant.map((item, i) => (
          <AccordionItem
            key={i}
            className={` ${
              i === 0 && 'border-t-2 border-t-orange-900 pt-7'
            } border border-x-0 border-b-brown-900 py-3 last:mb-4`}
          >
            <AccordionItemHeading>
              <AccordionItemButton className='flex items-center justify-between md:h-[70px]'>
                <p className='w-72 text-lg font-semibold md:w-[630px] lg:w-auto'>
                  {item.title}
                </p>
                <AccordionItemState>
                  {({ expanded }) => <CaretDown expanded={expanded} />}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='py-2 text-lg md:pt-0'>{item.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </ExternalPageTemplate>
  );
};

export default FaqPage;
