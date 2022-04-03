import React from 'react';
import styled, { css } from 'styled-components';
import { PasswordInput } from '../inputs/PasswordInput';
import { FormBaseProps, FormDescription, FormErrorMessage, FormLabel } from './FormBase';

export type PasswordFormProps = FormBaseProps<string> & {
  onChange: (v: string) => void;
  onBlur: (v: string) => void;
};

const UnstyledPasswordForm = React.memo(function PasswordForm({
  className,
  label,
  id,
  description,
  errorMessage,
  required,
  readonly,
  inline,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
}: PasswordFormProps) {
  return (
    <div className={className}>
      <FormLabel htmlFor={id} label={label} required={required} inline={inline} />
      {!!description && <FormDescription description={description} />}
      <PasswordInput
        id={id}
        name={name}
        value={value}
        hasError={!!errorMessage}
        placeholder={placeholder}
        readOnly={readonly}
        onChange={(e) => onChange(e.currentTarget.value ?? '')}
        onBlur={(e) => onBlur(e.currentTarget.value ?? '')}
      />
      {!!errorMessage && <FormErrorMessage message={errorMessage} />}
    </div>
  );
});

export const PasswordForm = styled(UnstyledPasswordForm)`
  & > ${FormLabel} + ${PasswordInput} {
    ${({ inline }) =>
      !inline &&
      css`
        margin-top: 4px;
      `}
  }
`;
