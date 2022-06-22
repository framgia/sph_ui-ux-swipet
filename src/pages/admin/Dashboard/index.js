import React, { Fragment } from 'react';
import AdminStaticPlaces from './StaticPlaces/index';
import Breadcrumb from '../../components/shared/Breadcrumb';
import AnalyticsOfUsers from './StaticAnalytic';

const AdminDashboard = () => (
  <Fragment>
    <div className='mb-5 flex text-brown-900'>
      <Breadcrumb text='Dashboard' to='/admin/dashboard' last />
    </div>
    <h1 className='mb-[41px] text-2xl font-bold text-brown-900'>Data Summary</h1>
    <div className='flex flex-col gap-[62px]'>
      <section>
        <AnalyticsOfUsers />
      </section>
      <section className='flex gap-[30px]'>
        <div className='flex h-[345px] w-full gap-[200px] rounded-lg bg-navy-100'>
          Adoption of Pets
        </div>
        <AdminStaticPlaces />
      </section>
    </div>

    <div className='mt-[250px] text-right text-base text-brown-900'>
      Copyright © 2022 Swipet, Inc. All Rights Reserved
    </div>
  </Fragment>
);

export default AdminDashboard;
