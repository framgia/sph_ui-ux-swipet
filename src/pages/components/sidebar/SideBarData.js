import React from 'react';
import { HomeIcon, UsersIcon, AdjustmentsIcon } from '@heroicons/react/solid';

const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <HomeIcon />,
  },
  {
    title: 'User List',
    path: '/admin/user-list',
    icon: <UsersIcon />,
  },
  {
    title: 'My Settings',
    path: '/admin/my-settings',
    icon: <AdjustmentsIcon />,
  },
];

export default SidebarData;
