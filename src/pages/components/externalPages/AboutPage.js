import React from 'react';
import { useTranslation } from 'react-i18next';
import ExternalPageTemplate from './ExternalPageTemplate';
import MetaDecorator from '../MetaDecorator';
import { aboutMetaData } from '../../../utilities/constants';

const AboutSwipet = () => {
  const { t } = useTranslation();
  const aboutPage = t('aboutPage', { ns: 'informations' });

  const listItems = aboutPage[5].text.map((list, index) => <li key={index}>{list}</li>);

  return (
    <ExternalPageTemplate title={t('aboutSwipet')}>
      <MetaDecorator title={aboutMetaData.title} content={aboutMetaData.content} />

      {aboutPage.map((item, index) => (
        <div key={index}>
          {item.isPTag && <p className='pb-4 text-lg'>{item.text}</p>}
          {item.isH3Tag && <h3 className='pb-4 text-2xl font-medium'>{item.text}</h3>}
          {item.isUlTag && <ul className='list-disc pl-8 pb-4'>{listItems}</ul>}
        </div>
      ))}
    </ExternalPageTemplate>
  );
};

export default AboutSwipet;
