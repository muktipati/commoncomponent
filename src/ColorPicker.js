// ColorPicker.js
import React from 'react';
import { useColorContext } from './ColorProvider';
import colorConfig from './config/colorConfig';

const ColorPicker = () => {
  const { theme, primaryColor, toggleTheme, changePrimaryColor } = useColorContext();

  const handleThemeChange = () => {
    toggleTheme();
  };

  const handlePrimaryColorChange = (color) => {
    changePrimaryColor(color);
  };

  return (
    <div>
      <h3>Color Picker</h3>
      <div>
        <label>Theme:</label>
        <button onClick={handleThemeChange}>Toggle Theme</button>
      </div>
      <div>
        <label>Primary Color:</label>
        {Object.keys(colorConfig.primaryColors).map((color) => (
          <button
            key={color}
            style={{
              backgroundColor: colorConfig.primaryColors[color],
            }}
            onClick={() => handlePrimaryColorChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
