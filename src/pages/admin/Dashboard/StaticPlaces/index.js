import React, { useState } from 'react';
import Modal from 'react-modal';
import DotsHorizontalIcon from '../../../components/icons/DotsHorizontalIcon';
import LocationIcon from '../../../components/icons/LocationIcon';
import PlacesContent from './PlacesContent';

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
    <div>
      <button onClick={openModal}>Open Modal</button>
      {modal}
    </div>
  );
};

export default AdminStaticPlaces;
