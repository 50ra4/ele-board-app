import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

/**
 * @see https://fonts.google.com/icons
 */
export const AddCircleIcon = React.memo(function AddCircleIcon({ className, titleAccess, color, size }: IconProps) {
  return (
    <SvgIcon className={className} titleAccess={titleAccess} color={color} size={size}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </SvgIcon>
  );
});
