import React from 'react';
import styled from 'styled-components';
import { IconButton, IconButtonProps } from '@/components/inputs/IconButton/IconButton';
import { CloseIcon } from '@/components/icons/CloseIcon';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { SvgIcon } from '@/components/icons/SvgIcon';

type OwnProps = {
  title: string;
  openMenu: boolean;
  onClickMenu?: () => void;
};

export type HeaderBarProps = OwnProps &
  Omit<React.ComponentPropsWithoutRef<'header'>, keyof OwnProps>;

const MenuButton = styled(function MenuButton({
  open,
  onClick,
  ...props
}: { open: boolean } & Omit<IconButtonProps, 'children'>) {
  return (
    <IconButton
      {...props}
      onClick={onClick}
      aria-label={open ? 'メニューを閉じる' : 'メニューを表示する'}
    >
      {open ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
})`
  & ${SvgIcon} {
    height: 24px;
    width: 24px;
    fill: ${({ theme }) => theme.color.primary.font};
  }
`;

const HEADER_BAR_HEIGHT = 56;

const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary.font};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 24px;
  line-height: ${HEADER_BAR_HEIGHT}px;
  height: ${HEADER_BAR_HEIGHT}px;
`;

export const HeaderBar = styled(
  React.memo(function HeaderBar({ className, title, openMenu, onClickMenu }: HeaderBarProps) {
    return (
      <header className={className}>
        <HeaderTitle>{title}</HeaderTitle>
        {onClickMenu && <MenuButton open={openMenu} onClick={onClickMenu} />}
      </header>
    );
  }),
)`
  z-index: ${({ theme }) => theme.zIndex.appBar};
  height: ${HEADER_BAR_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.primary.background};
`;
