import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import InputField from '../../components/shared/InputField';

const AdminLoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    window.location = '/admin/home';
  };

  const handleOnChange = (e) => e.target.value;

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-orange-900'>
      <div className='w-[300px] rounded-[5px] bg-orange-100 p-7 sm:w-[545px] sm:p-14 sm:pb-5'>
        <div className='flex w-full justify-center'>
          <LazyLoadImage
            src='/images/LogoDarkFit.svg'
            alt='logo'
            className='h-[68px] w-[288px] sm:mb-[27px]'
          />
        </div>
        <form onSubmit={handleSubmit}>
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
          <p className='mt-2 flex justify-end font-bold text-brown-900 hover:text-brown-700'>
            <Link to='/admin/forgot-password'>Forgot Password?</Link>
          </p>
          <Button buttonLabel='Login' type='submit' />
        </form>
        <p className='mt-[27px] flex justify-center gap-1 font-bold text-brown-900'>
          Don’t have an account?
          <Link to='/admin/registration' className='text-orange-900 hover:text-orange-700'>
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
