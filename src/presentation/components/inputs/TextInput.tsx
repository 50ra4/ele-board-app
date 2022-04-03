import React from 'react';
import styled from 'styled-components';
import { InputClearButton } from './InputClearButton';
import { InputBase, InputBaseProps } from './InputBase';

type OwnProps = {
  type?: 'email' | 'tel' | 'text' | 'url';
  onClear: () => void;
};

type TextInputProps = OwnProps & Omit<InputBaseProps, keyof OwnProps>;

function UnstyledTextInput({
  className,
  name,
  value = '',
  type = 'text',
  onClear,
  ...props
}: TextInputProps) {
  return (
    <div className={className}>
      <InputBase {...props} type={type} name={name} value={value} />
      {!!onClear && !!value && !props.readOnly && !props.disabled && (
        <InputClearButton areaLabel={`${name}の入力を削除する`} onClick={onClear} />
      )}
    </div>
  );
}

export const TextInput = styled(UnstyledTextInput)`
  width: 100%;
  position: relative;
  & > ${InputBase} {
    padding-right: 38px;
  }
  & > ${InputClearButton} {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`;
