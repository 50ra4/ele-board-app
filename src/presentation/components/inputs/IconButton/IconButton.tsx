import React from 'react';
import styled from 'styled-components';
import { SvgIcon } from '../../icons/SvgIcon';

type OwnProps = {
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

export type IconButtonProps = OwnProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof OwnProps>;

const UnstyledIconButton = function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export const IconButton = styled(UnstyledIconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 8px;
  &:disabled > ${SvgIcon} {
    // TODO:
  }
`;
