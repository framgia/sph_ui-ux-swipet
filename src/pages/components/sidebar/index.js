import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import SidebarData from './SideBarData';

const SideBar = () => {
  const activeStyle = {
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
  };

  return (
    <Fragment>
      <LazyLoadImage
        className='mb-5 h-[43px] w-[179px] pl-5'
        src='/images/LogoMix.svg'
        alt='swipet logo'
      />
      {SidebarData.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className='flex items-center py-3 px-5 text-white'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className='mr-[17px] mb-[2px] h-5 w-5'>{item.icon}</div>
          <div className='text-xl'>{item.title}</div>
        </NavLink>
      ))}
    </Fragment>
  );
};

export default SideBar;
