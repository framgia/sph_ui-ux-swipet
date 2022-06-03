import React from 'react';
import Tips from './Tips';
import IdeaIcon from '../icons/IdeaIcon';

const TipSection = () => (
  <section className=' bg-white py-28'>
    <div className='mx-auto flex flex-col justify-between gap-x-2 sm:mx-[200px] sm:flex-row'>
      {/* Heading */}
      <div className='flex w-1/2 flex-col'>
        <div className='w-full pb-[77px] md:w-[650px]'>
          <h2 className='heading-size text-left leading-[65px] dark:text-navy-900'>
            Give your engagement a BLAST!
          </h2>
        </div>
        <div className='flex flex-row pb-[78px]'>
          <IdeaIcon />
          <span className='ml-2 w-3/5 text-[24px] font-semibold text-navy-800'>
            Give your story a little whirl and make good impressions last.
          </span>
        </div>
        <p className='w-9/12 text-[20px] text-brown-900'>
          In order to adopt your preferred pet, you need to be able to continue a half-hearted and
          decent conversation. Dating app is designed to be able to talk to people.
          <br />
          <br />
          The possibility of adoption is as good as a conversation, so you need to make sure that
          the opening line is eye-catching.
        </p>
      </div>

      {/* Button */}
      <div className='flex flex-1 flex-col justify-center'>
        <div className='flex justify-center pb-[55px]'>
          <button className='h-[38px] w-20 rounded-l-lg bg-navy-600 px-2 py-1 text-lg font-semibold text-white hover:underline'>
            Tips
          </button>
          <button className='h-[38px] w-20 rounded-r-lg bg-navy-100 px-2 py-1 text-lg font-semibold text-dark-ash-900 hover:underline'>
            Demo
          </button>
        </div>
        <div className='flex flex-col items-center'>
          <Tips />
        </div>
      </div>
    </div>
  </section>
);

export default TipSection;
