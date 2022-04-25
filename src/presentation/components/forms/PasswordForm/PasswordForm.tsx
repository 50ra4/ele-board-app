import React from 'react';
import styled from 'styled-components';
import { FormBaseProps, FormLabel, FormDescription, FormErrorMessage } from '../FormBase';
import { PasswordInput } from '@/components/inputs/PasswordInput/PasswordInput';

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
  name,
  value,
  placeholder,
  onChange,
  onBlur,
}: PasswordFormProps) {
  return (
    <div className={className}>
      <FormLabel htmlFor={id} label={label} required={required} />
      {!!description && <FormDescription id={id} description={description} />}
      <PasswordInput
        id={id}
        name={name}
        value={value}
        error={!!errorMessage}
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
    margin-top: 4px;
  }
`;
