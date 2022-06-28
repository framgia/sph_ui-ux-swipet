import React from 'react';
import Button from '../../shared/Button';

const FactsAboutPetInfo = ({ getData }) => (
  <div>
    <h1 className='flex justify-center py-[51px] text-[32px] font-bold'>Facts about me</h1>
    <div className='flex gap-[39px] px-[66px] text-[16px] font-semibold'>
      <div className='flex flex-col gap-[42px]'>
        <ul>Name</ul>
        <ul>Gender</ul>
        <ul>Age</ul>
        <ul>Breed</ul>
        <ul>Color</ul>
        <ul>Size</ul>
      </div>
      <div className='flex flex-col gap-[42px]'>
        <ul>: {getData.author}</ul>
        <ul>: {getData.gender}</ul>
        <ul>: {getData.age}</ul>
        <ul>: {getData.breed}</ul>
        <ul>: {getData.color}</ul>
        <ul>: {getData.size}</ul>
      </div>
    </div>
    <div className='flex justify-center'>
      <Button
        buttonLabel='Ask me a Question'
        className='flex max-w-[197px] items-center justify-center'
      />
    </div>
  </div>
);

export default FactsAboutPetInfo;
