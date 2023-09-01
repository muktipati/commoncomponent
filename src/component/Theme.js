// SomeComponent.js
import React from 'react';
import { useColorContext } from '../ColorProvider';
import colorConfig from '../config/colorConfig';

const Theme = ({children}) => {
  const { theme, primaryColor } = useColorContext();
  const themeColors = colorConfig.themes[theme];

  return (
    <div
      style={{
        backgroundColor: themeColors.backgroundColor,
        color: themeColors.textColor,
      }}
    >
      {children}
     
    </div>
    
  );
};

export default Theme;
