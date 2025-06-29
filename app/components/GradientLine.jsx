

import React from 'react';

const GradientLine = ({align }) => {
  // Set the alignment styles
  const alignStyles = align === 'right' ? {} : {};

  // Set the gradient color based on the selected lineColor
  const gradientColors = {
    black: 'linear-gradient(90deg, #424242 0%, #ffffff 80%)',
    blackAlt: 'linear-gradient(270deg, #424242 0%, #ffffff 80%)',
  };

  // Choose the appropriate gradient based on alignment

  // Set the gradient color based on the lineColor value
  const gradientStyle = {
    background:`${align === 'right'? gradientColors.blackAlt: gradientColors.black } ` ,
    height: '4px',
    // width: 'calc(100vw)',
    // right: `${align === 'left'? '0': 'initial'}`,
    // left: `${align === 'right'? '0': 'initial'}`,

    // margin: `${align === 'left'? '35px 0':'35px auto 35px 0'}`,
    ...alignStyles, // Apply the alignment styles
  };

  return <div className='gradientParent'> <div style={gradientStyle}></div></div>;
};

export default GradientLine;
