import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

/**
 * @see https://fonts.google.com/icons
 */
export const DeleteIcon = React.memo(function DeleteIcon({ className, titleAccess, color, size }: IconProps) {
  return (
    <SvgIcon className={className} titleAccess={titleAccess} color={color} size={size}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
    </SvgIcon>
  );
});
