import React from 'react';
import SummaryCard from './SummaryCard';
import { summaries } from '../../../utilities/constants';

const SummarySection = () => (
  <section className=' bg-white py-28'>
    <div className='mx-auto sm:mx-[200px]'>
      {/* Heading */}
      <div className='title-heading pb-[77px]'>
        <h2 className='heading-size dark:text-orange-900'>Join the network and be a Fur Parent</h2>
      </div>

      {/* Sub Heading */}
      <p className='mx-auto w-4/5 pb-[99px] text-center text-xl font-medium text-navy-800 sm:w-[650px]'>
        Adopting a pet is a transformative and exciting experience, but it can be daunting at times.
        Rest assured that Swipet will be by your side in everything and will match you with your
        best friend.
      </p>

      {/* Cards */}
      <div className='flex flex-col items-center justify-center gap-2 lg:flex-row'>
        {summaries.map((summary, index) => (
          <SummaryCard summary={summary} key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default SummarySection;
