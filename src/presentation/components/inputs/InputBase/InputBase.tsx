import React from 'react';
import styled, { css } from 'styled-components';

type InputBaseOwnProps = {
  type: string;
  id: string;
  name: string;
  value: string | undefined;
  hasError?: boolean;
};

export type InputBaseProps = InputBaseOwnProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, keyof InputBaseOwnProps | 'children'>;

const UnstyledInputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(function InputBase(
  { ...props },
  ref,
) {
  return <input ref={ref} {...props} />;
});

export const InputBase = styled(UnstyledInputBase)`
  width: 100%;
  height: 48px;
  font-size: 16px;
  ${({ theme }) => theme.ellipsis(1)};
  background-color: ${({ theme }) => theme.color.input.default.background};
  caret-color: ${({ theme }) => theme.color.input.caret};
  padding: 0 8px;
  &:focus {
    background-color: ${({ theme }) => theme.color.input.focused.background};
    outline: 3px solid ${({ theme }) => theme.color.input.focused.outline};
    outline-offset: -2px;
  }
  ${({ hasError }) =>
    hasError &&
    css`
      background-color: ${({ theme }) => theme.color.input.error.background};
      outline: 3px solid ${({ theme }) => theme.color.input.error.outline};
      outline-offset: -2px;
    `}
`;
