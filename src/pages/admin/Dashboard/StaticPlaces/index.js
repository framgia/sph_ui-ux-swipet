import React, { useState } from 'react';
import Modal from 'react-modal';
import DotsHorizontalIcon from '../../../components/icons/DotsHorizontalIcon';
import LocationIcon from '../../../components/icons/LocationIcon';
import PlacesContent from './PlacesContent';
import PlacesStaticAnalytics from './PlacesStaticAnalytics';
import PlacePercentage from './PlacePercentage';
import CaretDown from '../../../components/icons/CaretDown';

const AdminStaticPlaces = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modal = (
    <Modal
      isOpen={modalIsOpen}
      className='absolute left-[600px] top-10'
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <div className='h-[953px w-[752px] bg-orange-100 pb-[13px]'>
        <div className='flex justify-between px-[55px] pt-[23px]'>
          <h1 className='flex gap-2 text-[24px] font-bold'>
            <LocationIcon /> Cebu
          </h1>
          <DotsHorizontalIcon />
        </div>
        <PlacesContent />
      </div>
    </Modal>
  );

  return (
    <div className='flex h-[345px] w-[331px] flex-col justify-center rounded-lg bg-[#E4EBEF] p-[23px]'>
      <div className='flex justify-between font-bold'>
        <div className='text-[16px]'>Location</div>
        <button
          className='flex items-center justify-center text-[12px] text-[#A3AED0]'
          onClick={openModal}
        >
          Cebu <CaretDown fill='#A3AED0' />
        </button>
      </div>
      <div className='h-[250px] w-full'>
        <PlacesStaticAnalytics />
      </div>
      <div className='flex h-[75px] w-full items-center justify-center rounded-[15px] bg-white'>
        <PlacePercentage />
      </div>
      {modal}
    </div>
  );
};

export default AdminStaticPlaces;
