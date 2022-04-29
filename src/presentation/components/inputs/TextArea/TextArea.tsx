import React from 'react';
import styled, { css } from 'styled-components';

type OwnProps = {
  id: string;
  name: string;
  value: string | undefined;
  row?: number;
  hasError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type TextAreaProps = OwnProps &
  Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof OwnProps | 'children'>;

export const TextArea = styled.textarea<OwnProps>`
  resize: none;
  width: 100%;
  height: ${({ row = 2 }) => row * 24}px;
  font-size: 16px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.input.default.background};
  caret-color: ${({ theme }) => theme.color.input.caret};

  &:focus {
    background-color: ${({ theme }) => theme.color.input.focused.background};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      background-color: ${({ theme }) => theme.color.input.error.background};
      ${theme.focusOutline(theme.color.input.error.outline)}
    `}
`;
