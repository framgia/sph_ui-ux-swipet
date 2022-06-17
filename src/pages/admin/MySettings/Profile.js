import React from 'react';
import Button from '../../components/shared/Button';
import InputField from '../../components/shared/InputField';
import TextArea from '../../components/shared/TextArea';

const AdminProfileTab = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    window.location = '/admin/login';
  };

  const handleOnChange = () => {};

  return (
    <div className='relative text-brown-900'>
      <form onSubmit={handleSubmit}>
        <div className='text-xl font-bold'>USER INFORMATION</div>
        <div className='grid grid-cols-2 gap-14 px-6'>
          <InputField
            name='Username'
            type='text'
            value='text'
            placeholder='juan.dela.cruz'
            onChange={handleOnChange}
          />
          <InputField
            name='Email Address'
            type='email'
            value='email'
            placeholder='Place your password here'
            onChange={handleOnChange}
          />
        </div>
        <div className='grid grid-cols-2 gap-14 px-6'>
          <InputField
            name='First Name'
            type='text'
            value='text'
            placeholder='Juan'
            onChange={handleOnChange}
          />
          <InputField
            name='Last Name'
            type='text'
            value='text'
            placeholder='Dela Cruz'
            onChange={handleOnChange}
          />
        </div>
        <hr className='mt-10 mb-[46px] border border-orange-900' />
        <div className='text-xl font-bold'>CONTACT INFORMATION</div>
        <div className='px-6'>
          <InputField
            name='Address'
            type='text'
            value='text'
            placeholder='Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09'
            onChange={handleOnChange}
          />
        </div>
        <div className='grid grid-cols-3 gap-14 px-5'>
          <InputField
            name='City'
            type='text'
            value='text'
            placeholder='New York'
            onChange={handleOnChange}
          />
          <InputField
            name='Country'
            type='text'
            value='text'
            placeholder='United States'
            onChange={handleOnChange}
          />
          <InputField
            name='Postal code'
            type='number'
            value='number'
            placeholder='000000'
            onChange={handleOnChange}
          />
        </div>
        <hr className='mt-10 mb-[45px] border border-orange-900' />
        <TextArea
          labelText='ABOUT ME'
          htmlFor='aboutme'
          labelClassName='flex flex-col text-xl font-bold'
          id='aboutme'
          rows='4'
          textAreaClassName='mx-5 mt-9 rounded-md border border-brown-900 p-5 text-base focus:outline-none'
          placeholder='About me'
        />
        <Button
          type='submit'
          buttonLabel='Update Profile'
          className='absolute -bottom-44 -left-10 w-[176px]'
        />
      </form>
    </div>
  );
};

export default AdminProfileTab;
