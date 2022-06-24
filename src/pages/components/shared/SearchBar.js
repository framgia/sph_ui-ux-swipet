import { SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const SearchBar = ({ placeholder, search, setSearch, className }) => {
  const [searchValue, setSearchValue] = useState(search);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    setSearch(searchValue);
  };

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length === 0) {
      setSearch(' ');
    }
  };
  return (
    <form className='flex items-center' onSubmit={onSearchSubmit}>
      <input
        className={`h-[40px] w-[200px] rounded-[5px] border border-brown-600 bg-white 
                px-3 py-2 pl-8 placeholder-slate-400 hover:border-brown-400 focus:border-brown-900 focus:outline-none
                focus:ring-1 focus:ring-sky-500 ${className}`}
        type='text'
        onChange={onSearchValueChange}
        placeholder={placeholder}
      />
      <SearchIcon className='absolute ml-[5px] w-[20px]' />
      <button type='submit' label='search' />
    </form>
  );
};

export default SearchBar;
