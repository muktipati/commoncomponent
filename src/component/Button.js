// SomeComponent.js
import React from 'react';
import { useColorContext } from '../ColorProvider';
import colorConfig from '../config/colorConfig';

const Button = () => {
  const {primaryColor } = useColorContext();
  

  return (
    // <div
    //   style={{
    //     backgroundColor: themeColors.backgroundColor,
    //     color: themeColors.textColor,
    //   }}
    // >
      
     
    // </div>
     <button style={{background:primaryColor}} type="submit" className="btn btn-primary" >confirm</button>
  );
};

export default Button;
