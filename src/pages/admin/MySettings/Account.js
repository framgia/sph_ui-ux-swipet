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
        <div className='w-[455px] px-6'>
          <InputField
            name='Current Password'
            type='password'
            value='currentPassword'
            onChange={handleOnChange}
          />
          <InputField
            name='New Password'
            type='password'
            value='newPassword'
            onChange={handleOnChange}
          />
          <InputField
            name='Confirm New Password'
            type='password'
            value='confirmNewPassword'
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
