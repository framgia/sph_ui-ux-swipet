import React, { Fragment } from 'react';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SearchBar from '../../components/shared/SearchBar';
import UserListTable from './UserListTable';

const AdminUserList = () => (
  <Fragment>
    <div className='mb-5 flex text-brown-900'>
      <Breadcrumb text='Dashboard' to='/admin/dashboard' />
      <Breadcrumb text='User List' last />
    </div>
    <p1 className='text-2xl font-bold text-brown-900'>Users List</p1>
    <hr className='border-orange-900' />
    <div className='mt-[30px] flex flex-col gap-[32px]'>
      <SearchBar />
      <UserListTable />
    </div>
  </Fragment>
);

export default AdminUserList;
