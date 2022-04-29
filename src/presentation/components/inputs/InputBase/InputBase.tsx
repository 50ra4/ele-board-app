import React from 'react';
import styled, { css } from 'styled-components';

type OwnProps = {
  type: string;
  id: string;
  name: string;
  value: string | undefined;
  error?: boolean;
};

export type InputBaseProps = OwnProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, keyof OwnProps | 'children'>;

export const InputBase = styled.input<OwnProps>`
  width: 100%;
  height: 48px;
  font-size: 16px;
  ${({ theme }) => theme.ellipsis(1)};
  background-color: ${({ theme }) => theme.color.input.default.background};
  caret-color: ${({ theme }) => theme.color.input.caret};
  padding: 0 8px;

  &:focus {
    background-color: ${({ theme }) => theme.color.input.focused.background};
  }

  ${({ error, theme }) =>
    error &&
    css`
      background-color: ${({ theme }) => theme.color.input.error.background};
      ${theme.focusOutline(theme.color.input.error.outline)}
    `}
`;
