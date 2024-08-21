import clsx from 'clsx';
import React from 'react';

export const Title = ({ text, size = 'sm', className }) => {
  const mapTagBySize = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    '2xl': 'h1',
  };

  const mapClassNameBySize = {
    xs: 'text-[18px]',
    sm: 'text-[22px]',
    md: 'text-[26px]',
    lg: 'text-[32px]',
    xl: 'text-[40px]',
    '2xl': 'text-[48px]',
  };

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], className) },
    text,
  );
};