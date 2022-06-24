import React, { Fragment } from 'react';
import TableData from '../../components/shared/TableData';
import Button from '../../components/shared/Button';

const UserListTable = () => {
  const userAdmindata = [
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      updatedAt: 'March 10, 2022',
      status: 'Verified',
    },
    {
      name: 'Maria Dela Cruz',
      email: 'mariadelacruz@gmail.com',
      updatedAt: 'February 2, 2022',
      status: 'Not Verified',
    },
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      updatedAt: 'March 10, 2022',
      status: 'Verified',
    },
    {
      name: 'Maria Dela Cruz',
      email: 'mariadelacruz@gmail.com',
      updatedAt: 'February 2, 2022',
      status: 'Not Verified',
    },
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      updatedAt: 'March 10, 2022',
      status: 'Verified',
    },
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      updatedAt: 'March 10, 2022',
      status: 'Verified',
    },
    {
      name: 'Maria Dela Cruz',
      email: 'mariadelacruz@gmail.com',
      updatedAt: 'February 2, 2022',
      status: 'Not Verified',
    },
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      updatedAt: 'March 10, 2022',
      status: 'Verified',
    },
    {
      name: 'Maria Dela Cruz',
      email: 'mariadelacruz@gmail.com',
      updatedAt: 'February 2, 2022',
      status: 'Not Verified',
    },
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      updatedAt: 'March 10, 2022',
      status: 'Verified',
    },
  ];

  const tableHeaderNames = [
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Date of Verification' },
    { title: 'Status' },
  ];

  const renderTableData = () =>
    userAdmindata.map((userData, idx) => (
      <tr key={idx} className='h-auto w-full table-auto border-2 border-brown-900 '>
        <td className='py-[16px] px-[58px] text-[16px] font-semibold'>{userData.name}</td>
        <td className='py-[16px] px-[58px] text-[16px] font-semibold'>{userData.email}</td>
        <td className='py-[16px] px-[58px] text-[16px] font-semibold'>{userData.updatedAt}</td>
        <td className='py-[16px] px-[58px]'>
          {userData.status === 'Not Verified' ? (
            <Button
              className='flex max-h-[22px] items-center justify-center rounded-[10px] px-4 text-[10px] font-semibold sm:mt-0 sm:w-auto'
              buttonLabel={userData.status}
              isDisable
            />
          ) : (
            <Button
              className='flex max-h-[22px] items-center justify-center rounded-[10px] px-4 text-[10px] font-semibold sm:mt-0 sm:w-auto'
              buttonLabel={userData.status}
            />
          )}
        </td>
      </tr>
    ));

  return (
    <Fragment>
      <TableData
        tableHeaderNames={tableHeaderNames}
        renderTableData={renderTableData}
        tableStyle='w-full table-auto border-2 border-brown-900'
        tHeadStyle='border-2 border-brown-900 font-semibold text-[16px]'
        tDStyle='py-[16px] px-[58px]'
        page={1}
        perPage={3}
        totalItems={10}
        pageCount={10}
      />
    </Fragment>
  );
};

export default UserListTable;
