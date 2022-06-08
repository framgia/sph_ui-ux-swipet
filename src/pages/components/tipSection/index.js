import React from 'react';
import Tips from './Tips';
import IdeaIcon from '../icons/IdeaIcon';

const TipSection = () => (
  <section className=' bg-white py-28 px-5 dark:bg-dark-ash-700 xl:px-[240px]'>
    <div className='mx-auto flex flex-col justify-between gap-x-2 lg:flex-row'>
      {/* Heading */}
      <div className='flex flex-col items-center lg:w-1/2 xl:items-start'>
        <div className='pb-[50px] md:w-[500px] lg:w-[450px] lg:pb-[77px] xl:w-[650px]'>
          <h2 className='heading-size leading-[65px] text-navy-900 dark:text-orange-900 lg:text-center xl:text-left'>
            Give your engagement a BLAST!
          </h2>
        </div>
        <div className='flex flex-row justify-center pb-[50px] lg:pb-[78px] xl:justify-start'>
          <IdeaIcon />
          <span className='ml-2 w-3/4 text-[24px] font-semibold text-navy-800 dark:text-orange-900 md:w-3/5'>
            Give your story a little whirl and make good impressions last.
          </span>
        </div>
        <p className='pb-[60px] text-[20px] text-brown-900 dark:text-white md:w-9/12 lg:pb-0'>
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
        <div className='flex justify-center pb-[30px] sm:pb-[55px]'>
          <button className='h-[38px] w-20 rounded-l-lg bg-navy-600 px-2 py-1 text-lg font-semibold text-white hover:underline dark:bg-orange-900'>
            Tips
          </button>
          <button className='h-[38px] w-20 rounded-r-lg bg-navy-100 px-2 py-1 text-lg font-semibold text-dark-ash-900 hover:underline dark:bg-orange-200'>
            Demo
          </button>
        </div>
        <div className='flex flex-col items-center md:px-14'>
          <Tips />
        </div>
      </div>
    </div>
  </section>
);

export default TipSection;
