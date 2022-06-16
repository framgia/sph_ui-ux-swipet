import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './Dashboard';
import AdminUserList from './UserList';
import AdminMySettings from './MySettings';
import SideBar from '../components/sidebar';

const AdminRoute = () => (
  <div className='flex'>
    <nav className='h-screen w-[225px] bg-gradient-to-b from-orange-900 to-mocha-900 pt-6'>
      <SideBar />
    </nav>
    <main>
      <Routes>
        <Route path='dashboard' element={<AdminDashboard />} />
        <Route path='user-list' element={<AdminUserList />} />
        <Route path='my-settings' element={<AdminMySettings />} />
      </Routes>
    </main>
  </div>
);

export default AdminRoute;
