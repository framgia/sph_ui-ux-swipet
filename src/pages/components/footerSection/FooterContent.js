import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { informationLinks } from '../../../utilities/constants';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import { useTheme } from '../../../utilities/contexts/ThemeContext';

const FooterContent = () => {
  const { colorScheme } = useTheme();

  const setDarkColor = {
    ...(colorScheme === 'dark' && { color: '#d8782e' }),
  };

  return (
    <div className='flex flex-col px-[20px] text-brown-900 dark:bg-dark-ash-800 sm:px-[20px] lg:px-14 xl:px-[200px] 2xl:px-[240px] 3xl:px-[320px]'>
      <div className='mb-12 flex flex-col items-center justify-between space-y-12 dark:text-white lg:flex-row lg:items-start'>
        <div className='mt-12 flex w-[300px] flex-col items-center justify-center md:w-[250px] lg:items-start lg:pb-12'>
          <Link to='/'>
            <LazyLoadImage
              src={`${
                colorScheme === 'light' ? '/images/LogoDarkFit.svg' : '/images/LogoDarkTheme.svg'
              }`}
              alt='LogoDark'
              className='h-12 w-48'
            />
          </Link>
          <p className='mt-8 text-center lg:text-left'>
            Swipet is a mobile application that makes pet adoption fun and easier.
          </p>
        </div>
        <div className='flex w-auto flex-col items-center justify-center lg:mt-[40px] lg:items-start xl:mt-[57px]'>
          <div className='text-2xl font-semibold'>Information</div>
          {informationLinks.map((item, i) => (
            <Link
              key={i}
              className={`${i === 0 ? 'mt-7' : 'mt-2'}  mb-2 hover:text-orange-700`}
              to={item.to}
              target='_blank'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center lg:items-start'>
          <div className='text-2xl font-semibold '>Contact</div>
          <div className='mt-7'>+63-905-478-9285</div>
          <div className='mt-2 mb-2'>swipet.contact@sun-asterisk.com</div>
          <div>Don Gil Garcia St, Cebu City</div>
        </div>
      </div>
      <hr />
      <div className='my-11 flex flex-col items-center justify-between gap-10 lg:flex-row'>
        <div className='flex w-80 justify-center gap-12 lg:justify-start'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'>
            <FacebookIcon {...setDarkColor} />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
            <TwitterIcon {...setDarkColor} />
          </a>
          <a href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener'>
            <InstagramIcon {...setDarkColor} />
          </a>
        </div>
        <p className='text-sm dark:text-white sm:text-base'>
          Copyright © 2022 Swipet, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
