import React from 'react';
import styled from 'styled-components';
import { useToggle } from 'src/hooks/useToggle';
import { IconButton } from '../IconButton/IconButton';
import { VisibilityIcon } from '../icons/VisibilityIcon';
import { InputBase, InputBaseProps } from './InputBase';

type PasswordInputProps = Omit<InputBaseProps, 'type'>;

function UnstyledPasswordInput({ className, value = '', ...otherProps }: PasswordInputProps) {
  const [visible, toggleVisible] = useToggle(false);

  return (
    <div className={className}>
      <InputBase {...otherProps} type={visible ? 'text' : 'password'} value={value} />
      <VisibilityButton visible={visible} onClick={toggleVisible} />
    </div>
  );
}

function UnstyledVisibilityButton({
  className,
  visible,
  onClick,
}: {
  className?: string;
  visible: boolean;
  onClick: () => void;
}) {
  return (
    <IconButton className={className} onClick={onClick}>
      <VisibilityIcon
        size="medium"
        titleAccess={visible ? 'パスワードを非表示にする' : 'パスワードを表示する'}
      />
    </IconButton>
  );
}

const VisibilityButton = styled(UnstyledVisibilityButton)``;

export const PasswordInput = styled(UnstyledPasswordInput)`
  width: 100%;
  position: relative;
  & > ${InputBase} {
    padding-right: 38px;
  }
  & > ${VisibilityButton} {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`;
