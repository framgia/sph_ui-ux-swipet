import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState('light');

  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) =>
        onSelectMode(e.matches ? 'dark' : 'light'),
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );

    // Remove listener
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
    };
  }, []);

  return mode;
};

export default useDarkMode;
