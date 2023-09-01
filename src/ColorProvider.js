// ColorContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState('blue');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  const contextValue = {
    theme,
    primaryColor,
    toggleTheme,
    changePrimaryColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
