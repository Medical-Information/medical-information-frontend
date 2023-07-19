import React from 'react';
import { getColor, IIconProps } from './utils';

export const DotIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9995 9.9996C11.4691 9.9996 10.9604 10.2103 10.5853 10.5854C10.2102 10.9605 9.99951 11.4692 9.99951 11.9996C9.99951 12.53 10.2102 13.0387 10.5853 13.4138C10.9604 13.7889 11.4691 13.9996 11.9995 13.9996C13.1095 13.9996 13.9995 13.1096 13.9995 11.9996C13.9995 11.4692 13.7888 10.9605 13.4137 10.5854C13.0387 10.2103 12.5299 9.9996 11.9995 9.9996Z" />
  </svg>
);
