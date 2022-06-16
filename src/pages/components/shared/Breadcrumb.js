import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Breadcrumb = ({ text, to = '#', last }) => {
  const activeStyle = {
    color: '#E07821',
    fontWeight: 700,
  };

  return (
    <NavLink
      className='flex items-center'
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      to={to}
    >
      {text}
      {!last && <ChevronRightIcon className='h-5 w-5 text-brown-900' />}
    </NavLink>
  );
};

export default Breadcrumb;
