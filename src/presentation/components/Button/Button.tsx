import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonStyleProps = {
  fullWidth?: boolean;
};

export type ButtonProps = ButtonStyleProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonStyleProps>;

export const Button = styled.button<ButtonStyleProps>`
  display: inline-block;
  font-size: 14px;
  color: #ffffff;
  background-color: #000000;
  padding: 5px 16px;
  border-radius: 6px;
  ${({ fullWidth }) =>
    !!fullWidth &&
    css`
      width: 100%;
    `};
`;
