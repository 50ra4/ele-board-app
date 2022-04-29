import React from 'react';
import styled, { css } from 'styled-components';

type OwnProps = {
  className?: string;
  id: string;
  name: string;
  value: string | undefined;
  row?: number;
  hasError?: boolean;
};

export type TextAreaProps = OwnProps &
  Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof OwnProps | 'children'>;

const UnstyledTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  props,
  ref,
) {
  return <textarea {...props} ref={ref} />;
});

export const TextArea = styled(UnstyledTextArea)`
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
