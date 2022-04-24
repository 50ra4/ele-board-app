import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

/**
 * @see https://fonts.google.com/icons
 */
export const MailIcon = React.memo(function MailIcon({
  className,
  titleAccess,
  color,
  size,
}: IconProps) {
  return (
    <SvgIcon
      className={className}
      titleAccess={titleAccess}
      color={color}
      size={size}
      viewBox="0 0 48 48"
    >
      <path d="M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V37Q44 38.2 43.1 39.1Q42.2 40 41 40ZM24 24.9 7 13.75V37Q7 37 7 37Q7 37 7 37H41Q41 37 41 37Q41 37 41 37V13.75ZM24 21.9 40.8 11H7.25ZM7 13.75V11V13.75V37Q7 37 7 37Q7 37 7 37Q7 37 7 37Q7 37 7 37Z" />
    </SvgIcon>
  );
});
