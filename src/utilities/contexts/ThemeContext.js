import React, { useContext, useMemo, useState } from 'react';

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('light');

  const foo = useMemo(() => ({ colorScheme, setColorScheme }), [colorScheme]);

  return <ThemeContext.Provider value={foo}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
