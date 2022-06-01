import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import { useTheme } from '../../utilities/contexts/ThemeContext';
import CaretDown from './icons/CaretDown';

const lang = ['English', 'Japanese'];

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const { colorScheme } = useTheme();

  const [selectedLang, setSelectedLang] = useState(lang[0]);

  const selectedLanguageCheck = (index) => {
    if (index === 0) {
      i18n.changeLanguage('en');
    }
    if (index === 1) {
      i18n.changeLanguage('jp');
    }
  };

  useEffect(() => {
    if (localStorage.i18nextLng === 'en') {
      setSelectedLang(lang[0]);
      i18n.changeLanguage('en');
    } else if (localStorage.i18nextLng === 'jp') {
      setSelectedLang(lang[1]);
      i18n.changeLanguage('jp');
    }

    window.addEventListener('storage', (e) => {
      if (e.newValue === 'en') {
        setSelectedLang(lang[0]);
      } else if (e.newValue === 'jp') {
        setSelectedLang(lang[1]);
      }
    });
  }, [selectedLang]);

  return (
    <Listbox value={selectedLang} onChange={setSelectedLang}>
      <div className='relative'>
        <Listbox.Button className='relative w-32 cursor-pointer border border-brown-900 bg-orange-100 p-3 text-left text-base shadow-sm dark:border-orange-900 dark:bg-dark-ash-700'>
          <span className='w-6 font-bold text-brown-900 dark:text-orange-900'>{selectedLang}</span>
          <span className='absolute inset-y-0 right-0 flex items-center'>
            <CaretDown width='13' fill={` ${colorScheme === 'light' ? '#5B4C49' : '#D8782D'}`} />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute right-0 mt-1 max-h-60 w-32 overflow-auto rounded-sm bg-white text-sm shadow-lg focus:outline-none dark:bg-dark-ash-700'>
            {lang.map((l, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) => `relative flex cursor-pointer select-none items-center py-1 px-3 ${
                  active ? 'bg-amber-100 text-orange-900' : 'text-brown-900 dark:text-white'
                }`}
                value={l}
                onClick={() => selectedLanguageCheck(i)}
              >
                {({ selected }) => (
                  <>
                    {selected && (
                      <CheckIcon
                        className='absolute left-0 ml-3 h-5 w-5 text-orange-900'
                        aria-hidden='true'
                      />
                    )}
                    <span className={`ml-7 ${selected && 'font-bold text-orange-900'}`}>{l}</span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default LanguageSelect;
