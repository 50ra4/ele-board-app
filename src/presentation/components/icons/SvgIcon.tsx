import React from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'src/presentation/styles/theme';

const ICON_SIZE = {
  small: 18,
  medium: 24,
  large: 36,
  extraLarge: 72,
} as const;

export type IconSize = keyof typeof ICON_SIZE;

export type IconProps = {
  className?: string;
  titleAccess?: string;
  color?: ColorPalette;
  size?: IconSize;
};

export type SvgIconProps = IconProps & {
  viewBox?: string;
  children: React.ReactNode;
};

/**
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/SvgIcon/SvgIcon.js
 */
function UnstyledSvgIcon({
  className,
  titleAccess,
  viewBox = '0 0 24 24',
  children = null,
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={titleAccess ? undefined : true}
      aria-label={titleAccess || undefined}
      role={titleAccess ? 'img' : undefined}
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}

export const SvgIcon = styled(UnstyledSvgIcon)`
  fill: ${({ color = 'default', theme }) => theme.color[color].background};
  ${({ size }) =>
    size &&
    css`
      width: ${ICON_SIZE[size]}px;
      height: ${ICON_SIZE[size]}px;
    `}
`;
