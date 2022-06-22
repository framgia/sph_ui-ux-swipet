import React from 'react';
import { Line } from 'rc-progress';
import DotsHorizontalIcon from '../../../components/icons/DotsHorizontalIcon';
import Spinner from '../../../components/shared/Spinner';
import CheckCircledIcon from '../../../components/icons/CheckCircledIcon';

const AdoptionOfPets = () => {
  const data = [
    {
      name: 'Corgi',
      status: 'Approved',
      update: '18 Apr 2021',
      percent: '100',
    },
    {
      name: 'Labrador',
      status: 'Pending',
      update: '18 Apr 2021',
      percent: '0',
    },
    {
      name: 'Savannah cat',
      status: 'Pending',
      update: '20 Apr 2021',
      percent: '0',
    },
    {
      name: 'British Shorthair',
      status: 'Approved',
      update: '12 Apr 2021',
      percent: '100',
    },
  ];

  return (
    <div className='flex w-full flex-col gap-[152px]'>
      <section className='h-[345px] rounded-lg bg-[#E4EBEF] p-[19px]'>
        <div className='flex justify-between'>
          <h1 className='text-[24px] font-bold text-[#2B3674]'>Adoption of Pets</h1>
          <DotsHorizontalIcon />
        </div>
        <div className='flex justify-between p-10'>
          <ul className='flex flex-col items-start gap-[23px]'>
            <h2 className='text-sm text-[#A3AED0]'>Name</h2>
            <ul className='flex flex-col gap-[23px] text-sm font-bold text-[#2B3674]'>
              {data.map((name, idx) => (
                <li key={idx}>{name.name}</li>
              ))}
            </ul>
          </ul>
          <ul className='flex flex-col items-center gap-[23px]'>
            <h2 className='text-sm text-[#A3AED0]'>STATUS</h2>
            <ul className='flex flex-col gap-[21px] text-sm font-bold text-[#2B3674]'>
              {data.map((status, idx) =>
                status.status === 'Approved' ? (
                  <li className='flex items-center gap-[5px]' key={idx}>
                    <CheckCircledIcon /> Approved
                  </li>
                ) : (
                  <Spinner key={idx} label='Pending' type='spinningBubbles' size='20px' />
                ),
              )}
            </ul>
          </ul>
          <ul className='flex flex-col items-center gap-[23px] text-sm font-bold text-[#2B3674]'>
            <h2 className='text-sm text-[#A3AED0]'>DATE</h2>
            <ul className='flex flex-col gap-[23px]'>
              {data.map((date, idx) => (
                <li key={idx}>{date.update}</li>
              ))}
            </ul>
          </ul>
          <ul className='flex flex-col items-center gap-[28px]'>
            <h2 className='text-sm text-[#A3AED0]'>PROGRESS</h2>
            <ul className='flex flex-col gap-[35px]'>
              {data.map((percent, idx) => (
                <Line
                  key={idx}
                  percent={percent.percent}
                  strokeWidth={1}
                  strokeColor='blue'
                  className='h-2 w-[108px] rounded-[21px]'
                />
              ))}
            </ul>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdoptionOfPets;
