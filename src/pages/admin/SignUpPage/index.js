import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import InputField from '../../components/shared/InputField';

const AdminSignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    window.location = '/admin/login';
  };

  const handleOnChange = () => {
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-orange-900'>
      <div className='rounded-[5px] bg-orange-100 p-7 h-[685px] w-[545px] py-[38px] px-[58px] pb-5'>
        <div className='flex w-full justify-center mb-[39px]'>
          <LazyLoadImage
            src='/images/LogoDarkFit.svg'
            alt='logo'
            className='h-[68px] w-[288px]'
          />
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            name='User Name'
            type='text'
            value='text'
            placeholder='juandelacruz'
            onChange={handleOnChange}
          />
          <InputField
            name='Email'
            type='email'
            value='email'
            placeholder='juandelacruz@gmail.com'
            onChange={handleOnChange}
          />
          <InputField
            name='Password'
            type='password'
            value='password'
            placeholder='Place your password here'
            onChange={handleOnChange}
          />
          <Button buttonLabel='Sign up' type='submit' />
        </form>
        <p className='mt-[27px] text-[20px] flex justify-center gap-1 font-bold text-brown-900'>
          Already have an account?
          <Link to='/admin/registration' className='text-orange-900'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
