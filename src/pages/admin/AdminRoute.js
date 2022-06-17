import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './Dashboard';
import AdminUserList from './UserList';
import AdminMySettings from './MySettings';
import SideBar from '../components/sidebar';

const AdminRoute = () => (
  <div className='flex'>
    <SideBar />
    <main className='w-screen p-[35px]'>
      <Routes>
        <Route path='dashboard' element={<AdminDashboard />} />
        <Route path='user-list' element={<AdminUserList />} />
        <Route path='my-settings' element={<AdminMySettings />} />
      </Routes>
    </main>
  </div>
);

export default AdminRoute;
