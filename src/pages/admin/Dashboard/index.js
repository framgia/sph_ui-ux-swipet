import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import AdminStaticPlaces from './StaticPlaces/index';
import Breadcrumb from '../../components/shared/Breadcrumb';
import AnalyticsOfUsers from './StaticAnalytic';
import AdoptionOfPets from './AdoptionOfPets';
import SummaryCard from '../../components/summarySection/SummaryCard';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const AdminSummaries = t('adminSummaries', { ns: 'adminFeatures' });

  return (
    <Fragment>
      <div className='mb-5 flex text-brown-900'>
        <Breadcrumb text='Dashboard' to='/admin/dashboard' last />
      </div>
      <h1 className='mb-[41px] text-2xl font-bold text-brown-900'>Data Summary</h1>
      <div className='flex flex-col gap-[62px]'>
        <section>
          <AnalyticsOfUsers />
        </section>
        <section className='flex gap-8'>
          <AdoptionOfPets />
          <AdminStaticPlaces />
        </section>
        <section>
          <div className='flex w-full flex-col justify-between md:flex-row'>
            {AdminSummaries.map((summary, index) => (
              <SummaryCard summary={summary} key={index} />
            ))}
          </div>
        </section>
      </div>

      <div className='mt-20 text-right text-base text-brown-900'>
        Copyright © 2022 Swipet, Inc. All Rights Reserved
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
