import React from 'react';
import Button from '../../components/shared/Button';
import InputField from '../../components/shared/InputField';

const AdminAccountTab = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    window.location = '/admin/login';
  };

  const handleOnChange = () => {};

  return (
    <div className='relative text-brown-900'>
      <form onSubmit={handleSubmit}>
        <div className='text-xl font-bold'>CHANGE PASSWORD</div>
        <div className='w-[455px] gap-14 px-6'>
          <InputField
            name='Current Password'
            type='password'
            value='currentPassword'
            placeholder='*************'
            onChange={handleOnChange}
          />
          <InputField
            name='New Password'
            type='password'
            value='newPassword'
            placeholder='*************'
            onChange={handleOnChange}
          />
          <InputField
            name='Confirm New Password'
            type='password'
            value='confirmNewPassword'
            placeholder='*************'
            onChange={handleOnChange}
          />
        </div>
        <Button
          type='submit'
          buttonLabel='Save Changes'
          className='absolute -bottom-44 -left-10 w-[176px]'
        />
      </form>
    </div>
  );
};

export default AdminAccountTab;
