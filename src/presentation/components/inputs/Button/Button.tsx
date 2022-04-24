import React from 'react';
import styled, { css } from 'styled-components';
import { ColorPalette } from 'src/presentation/styles/theme';
import { LoadingSpinner } from '@/components/utils/LoadingSpinner/LoadingSpinner';

type ButtonStyleProps = {
  variant?: 'outlined' | 'contained';
  color: ColorPalette;
  isLoading?: boolean;
};

export type ButtonProps = ButtonStyleProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonStyleProps>;

const UnstyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, isLoading, disabled, ...props },
  ref,
) {
  return (
    <button ref={ref} type="button" disabled={isLoading || disabled} {...props}>
      {!isLoading ? (
        children
      ) : (
        <LoadingWrapper>
          <LoadingSpinner />
          <span>Loading...</span>
        </LoadingWrapper>
      )}
    </button>
  );
});

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ${LoadingSpinner} {
    min-width: 18px;
    min-height: 18px;
  }
  & > span {
    margin-left: 4px;
  }
`;

export const Button = styled(UnstyledButton)`
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
  ${({ theme, disabled = false, isLoading = false, variant = 'contained' }) =>
    (isLoading || disabled) &&
    css`
      border: 1px solid ${theme.color.disabled.background};
      color: ${variant === 'outlined' && theme.color.disabled.background};
      background-color: ${variant === 'contained' && theme.color.disabled.background};
    `}
  padding: 4px 16px;
  border-radius: 6px;
`;
