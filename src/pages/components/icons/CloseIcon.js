import React from 'react';

const CloseIcon = ({ closeChatBox }) => (
  <svg
    onClick={closeChatBox}
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8 cursor-pointer rounded-lg p-1 text-white hover:bg-orange-300'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
  </svg>
);

export default CloseIcon;
