import React from 'react';
import { useTranslation } from 'react-i18next';
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
import { faqMetaData } from '../../../utilities/constants';

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <ExternalPageTemplate title={t('faqsAboutPetAdoption')}>
      <MetaDecorator title={faqMetaData.title} content={faqMetaData.content} />

      <Accordion allowZeroExpanded allowMultipleExpanded>
        {t('faq', { ns: 'informations' }).map((item, i) => (
          <AccordionItem
            key={i}
            className={` ${
              i === 0 ? 'border-t-2 border-t-orange-900 pt-7' : 'border-t-0'
            } border border-x-0 border-b-brown-900 py-3 last:mb-4 dark:border-b-white`}
          >
            <AccordionItemHeading>
              <AccordionItemButton className='flex items-center justify-between md:h-[70px]'>
                <p className='w-72 text-lg font-semibold md:w-[630px] lg:w-auto'>{item.title}</p>
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
