import React, { Fragment, useState } from 'react';
import StaticEchart from './statisEchart';

const AnalyticsOfUsers = () => {
  const [isData, setIsData] = useState('');

  return (
    <Fragment>
      <div className='flex h-[373px] gap-[200px] rounded-lg bg-navy-100'>
        <div className='w-[1059px]'>
          <h1 className='flex justify-center pt-[13px] text-[32px] font-semibold'>
            Analytics of Users
          </h1>
          <div className='absolue h-[294px]'>
            <StaticEchart data={isData} />
          </div>
        </div>
        <ul className='flex flex-col justify-center gap-[40px] text-[13px]'>
          <div className='flex items-center gap-[11px]'>
            <button
              label='DataButton'
              className='h-5 w-[17px] rounded-lg bg-[#F45B4A]'
              onClick={() => setIsData('Not yet Verified')}
            />
            <li>Not yet Verified</li>
          </div>
          <div className='flex items-center gap-[11px]'>
            <button
              label='DataButton'
              className='h-5 w-[17px] rounded-lg bg-[#3E59A0]'
              onClick={() => setIsData('Verified')}
            />
            <li>Verified</li>
          </div>
          <div className='flex items-center gap-[11px]'>
            <button
              label='DataButton'
              className='h-5 w-[17px] rounded-lg bg-[#4AE2A2]'
              onClick={() => setIsData('Most Registered')}
            />
            <li>Most Registered</li>
          </div>
        </ul>
      </div>
    </Fragment>
  );
};

export default AnalyticsOfUsers;
