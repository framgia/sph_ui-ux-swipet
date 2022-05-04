import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const [isPopUp, setIsPopUp] = useState(true);

  const onClickNoted = () => {
    Cookies.set('isNotifiedOnPolicy', 1);
    setIsPopUp(false);
  };

  useEffect(() => {
    if (Cookies.get('isNotifiedOnPolicy')) {
      setIsPopUp(false);
    } else {
      setIsPopUp(true);
    }
  }, []);

  return (
    <div
      className={`${
        isPopUp ? 'block' : 'hidden'
      } sticky bottom-0 bg-white py-4 px-2 lg:py-10 md:px-12 lg:px-[200px] leading-6 border-t-2 z-20 text-justify`}
    >
      <p className='text-sm lg:text-base'>
        Swipet stores cookies on your computer. These cookies are used in order
        to improve and customize your browsing experience and for analytics and
        metrics about our visitors both on this website and other media. To
        learn more, see our{' '}
        <Link
          to='/privacy-policy'
          className='text-navy-900 hover:underline'
          target='_blank'
        >
          Privacy Policy
        </Link>
      </p>
      <div className='mt-6 block md:flex justify-start lg:justify-between items-center'>
        <p className='text-sm lg:text-base'>
          By using our site you agree to our use of cookies.
        </p>
        <button
          className='px-8 py-2 bg-orange-900 rounded-lg text-white text-center font-semibold ml-0 md:ml-8 mt-4 md:mt-0'
          onClick={onClickNoted}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default CookiePolicy;
