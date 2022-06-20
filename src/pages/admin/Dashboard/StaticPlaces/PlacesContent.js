import React from 'react';
import { useTranslation } from 'react-i18next';

const PlacesContent = () => {
  const { t } = useTranslation();
  const places = t('listOfPlaces', { ns: 'places' });

  return (
    <div className='flex justify-between px-[115px] pt-[63px]'>
      <div>
        <h1 className='mb-5 text-[14px] font-medium text-navy-600'>Name of Places</h1>
        {places.map((place, idx) => (
          <div className='text-[15px]' key={idx}>
            <ul>{place.place}</ul>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 text-[14px] font-medium text-navy-600'>Percentage %</h1>
        {places.map((percentage, idx) => (
          <div className='text-[15px]' key={idx}>
            <ul>{percentage.percentage}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesContent;
