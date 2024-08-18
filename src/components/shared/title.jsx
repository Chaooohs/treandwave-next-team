import clsx from 'clsx';
import React from 'react';

export const Title = ({ text, size = 'sm', weight, className }) => {
  const mapTagBySize = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    '2xl': 'h1',
  };

  const mapClassNameBySize = {
    xs: 'text-[16px]',
    sm: 'text-[22px]',
    md: 'text-[26px]',
    lg: 'text-[32px]',
    xl: 'text-[40px]',
    '2xl': 'text-[48px]',
  };

  const mapClassNameByWeight = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    bold: 'font-bold',
    '2xl': '',
  };

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], mapClassNameByWeight[weight], className) },
    text,
  );
};