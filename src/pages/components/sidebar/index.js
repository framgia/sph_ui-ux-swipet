import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import SidebarData from './SideBarData';

const SideBar = () => {
  const activeStyle = {
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
  };

  return (
    <nav className='min-h-screen min-w-[225px] bg-gradient-to-b from-orange-900 to-mocha-900 pt-6'>
      <LazyLoadImage
        className='mb-5 h-[43px] w-[179px] pl-5'
        src='/images/LogoMix.svg'
        alt='swipet logo'
      />
      {SidebarData.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className='items-cente flex py-3 px-5 text-white'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className='mr-[17px] h-5 w-5 '>{item.icon}</div>
          <div className='text-xl'>{item.title}</div>
        </NavLink>
      ))}
    </nav>
  );
};

export default SideBar;
