'use client';

import React from 'react';

const GradientLine = ({ lineColor, align }) => {
  // Set the alignment styles
  const alignStyles = align === 'right' ? { marginLeft: 'auto', marginRight: 0 } : {};

  // Set the gradient color based on the selected lineColor
  const gradientColors = {
    black: 'linear-gradient(90deg, #424242 0%, #ffffff 100%)',
    blackAlt: 'linear-gradient(270deg, #424242 0%, #ffffff 100%)',
  };

  // Choose the appropriate gradient based on alignment

  // Set the gradient color based on the lineColor value
  const gradientStyle = {
    background:`${align === 'right'? gradientColors.blackAlt: gradientColors.black } ` ,
    height: '4px',
    width: '80%',
    margin: `${align === 'left'? '35px 0':'35px auto 35px 0'}`,
    ...alignStyles, // Apply the alignment styles
  };

  return <div style={gradientStyle}></div>;
};

export default GradientLine;
