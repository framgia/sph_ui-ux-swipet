import React, { Fragment, useRef } from 'react';
import { Tab } from '@headlessui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Breadcrumb from '../../components/shared/Breadcrumb';
import AdminProfileTab from './Profile';
import AdminAccountTab from './Account';
import Button from '../../components/shared/Button';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const TabNames = ['Profile', 'Account'];

const AdminMySettings = () => {
  const fileInput = useRef(null);
  return (
    <Fragment>
      <div className='mb-5 flex text-brown-900'>
        <Breadcrumb text='Dashboard' to='/admin/dashboard' />
        <Breadcrumb text='My Settings' last />
      </div>
      <section>
        <div className='text-2xl font-bold text-brown-900'>My Settings</div>
        <hr className='mt-3 border border-orange-900' />
        <div className='mx-8 mt-8 flex'>
          <div className='flex flex-col items-center'>
            <LazyLoadImage
              src='/images/Test05.webp'
              className='mb-10 h-[294px] w-[294px] rounded-full'
              alt='profile'
            />
            <div>
              <input type='file' name='image' ref={fileInput} style={{ display: 'none' }} />
              <Button
                className='mt-0 max-h-[43px] w-[140px] rounded-md bg-orange-900 px-5 py-2 text-[16px] font-semibold text-white'
                onClick={() => fileInput.current.click()}
                buttonLabel='Upload Photo'
              />
            </div>
          </div>
          <div className='mx-11 w-[1000px]'>
            <Tab.Group>
              <Tab.List className='rounded-md bg-orange-900 p-1'>
                {TabNames.map((TabName, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        'rounded-md py-1 px-9 text-xl font-bold text-white focus:outline-none',
                        selected && 'bg-white text-brown-900',
                      )
                    }
                  >
                    {TabName}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className='mt-3 rounded-md border border-brown-900 py-10 px-10'>
                <Tab.Panel>
                  <AdminProfileTab />
                </Tab.Panel>
                <Tab.Panel>
                  <AdminAccountTab />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
      <div className='mt-[250px] text-right text-base text-brown-900'>
        Copyright © 2022 Swipet, Inc. All Rights Reserved
      </div>
    </Fragment>
  );
};

export default AdminMySettings;
