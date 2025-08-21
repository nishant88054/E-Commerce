// src/components/common/Container.jsx
import React from 'react';

const Container = ({ children, className = '', maxWidth = 'max-w-7xl', ...props }) => {
  return (
    <div 
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;