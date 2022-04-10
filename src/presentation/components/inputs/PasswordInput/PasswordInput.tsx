import React from 'react';
import styled from 'styled-components';
import { useToggle } from 'src/hooks/useToggle';
import { InputBaseProps, InputBase } from '../InputBase/InputBase';
import { VisibilityButton } from './VisibilityButton';

type PasswordInputProps = Omit<InputBaseProps, 'type'>;

function UnstyledPasswordInput({ className, value = '', ...otherProps }: PasswordInputProps) {
  const [visible, toggleVisible] = useToggle(false);
  return (
    <div className={className}>
      <InputBase {...otherProps} type={visible ? 'text' : 'password'} value={value} />
      <VisibilityButton
        label={visible ? 'パスワードを非表示にする' : 'パスワードを表示する'}
        visible={visible}
        onClick={toggleVisible}
      />
    </div>
  );
}

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
