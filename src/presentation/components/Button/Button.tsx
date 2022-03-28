import React from 'react';
import styled, { css } from 'styled-components';
import { ColorPalette } from 'src/presentation/styles/theme';

export type ButtonStyleProps = {
  fullWidth?: boolean;
  variant?: 'outlined' | 'contained';
  color: ColorPalette;
};

export type ButtonProps = ButtonStyleProps &
  Omit<React.ComponentProps<'button'>, keyof ButtonStyleProps>;

export const Button = styled.button<ButtonStyleProps>`
  height: 48px;
  display: inline-block;
  font-size: 14px;
  ${({ theme, color, variant = 'contained' }) =>
    variant === 'contained'
      ? css`
          color: ${theme.color[color].font};
          background-color: ${theme.color[color].background};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.color[color].background};
          color: ${({ theme }) => theme.color[color].background};
          background-color: inherit;
        `}
  ${({ theme, disabled = false, variant = 'contained' }) =>
    disabled &&
    css`
      border: 1px solid ${theme.color.disabled.background};
      color: ${variant === 'outlined' && theme.color.disabled.background};
      background-color: ${variant === 'contained' && theme.color.disabled.background};
    `}
  padding: 5px 16px;
  border-radius: 6px;
  ${({ fullWidth }) =>
    !!fullWidth &&
    css`
      width: 100%;
    `};
`;
