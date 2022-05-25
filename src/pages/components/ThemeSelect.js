import React, { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import DesktopIcon from './icons/DesktopIcon';
import { useTheme } from '../../utilities/contexts/ThemeContext';

const theme = [
  { icon: <DesktopIcon />, label: 'System' },
  { icon: <SunIcon />, label: 'Light' },
  { icon: <MoonIcon />, label: 'Dark' },
];

const ThemeSelect = () => {
  const { setColorScheme } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState(theme[0].icon);

  const selectedThemeCheck = (index) => {
    if (index === 0) {
      localStorage.removeItem('theme');
    }
    if (index === 1) {
      localStorage.theme = 'light';
    }
    if (index === 2) {
      localStorage.theme = 'dark';
    }
  };

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setSelectedTheme(theme[2].icon);
    } else if (localStorage.theme === 'light') {
      setSelectedTheme(theme[1].icon);
    }

    window.addEventListener('storage', (e) => {
      if (e.newValue === 'dark') {
        setSelectedTheme(theme[2].icon);
      } else if (e.newValue === 'light') {
        setSelectedTheme(theme[1].icon);
      } else {
        setSelectedTheme(theme[0].icon);
      }
    });

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setColorScheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setColorScheme('light');
      document.documentElement.classList.remove('dark');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && e.matches)) {
        setColorScheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setColorScheme('light');
        document.documentElement.classList.remove('dark');
      }
    });
  }, [selectedTheme]);

  return (
    <div className='z-10'>
      <Listbox value={selectedTheme} onChange={setSelectedTheme}>
        <div className='relative'>
          <Listbox.Button className='relative w-12 cursor-pointer rounded-[50%] bg-white p-3 text-left shadow-md dark:bg-dark-ash-700 sm:text-sm'>
            <span className='block w-6 text-orange-900'>{selectedTheme}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute right-0 mt-2 max-h-60 w-32 overflow-auto rounded-md bg-white text-base shadow-lg focus:outline-none dark:bg-dark-ash-700'>
              {theme.map((t, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) => `relative flex cursor-pointer select-none items-center py-2 px-4 ${
                    active ? 'bg-amber-100 text-orange-900' : 'text-brown-900 dark:text-white'
                  }`}
                  value={t.icon}
                  onClick={() => selectedThemeCheck(i)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`mr-4 block h-auto w-7 truncate ${
                          selected && 'text-orange-900'
                        }`}
                      >
                        {t.icon}
                      </span>
                      <span className={`${selected && 'font-bold text-orange-900'}`}>
                        {t.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ThemeSelect;
