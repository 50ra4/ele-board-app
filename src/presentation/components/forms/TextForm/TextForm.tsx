import React from 'react';
import styled from 'styled-components';
import { TextInput, TextInputProps } from '@/components/inputs/TextInput/TextInput';
import { FormBaseProps, FormLabel, FormDescription, FormErrorMessage } from '../FormBase';

export type TextFormProps = FormBaseProps<string> & {
  type: TextInputProps['type'];
  onChange: (v: string) => void;
  onBlur: (v: string) => void;
  onClear: () => void;
};

const UnstyledTextForm = React.memo(function TextForm({
  className,
  label,
  id,
  description,
  errorMessage,
  type,
  required,
  readonly,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onClear,
}: TextFormProps) {
  return (
    <div className={className}>
      <FormLabel htmlFor={id} label={label} required={required} />
      {!!description && <FormDescription id={id} description={description} />}
      <TextInput
        type={type}
        id={id}
        name={name}
        value={value}
        hasError={!!errorMessage}
        placeholder={placeholder}
        readOnly={readonly}
        onChange={(e) => onChange(e.currentTarget.value ?? '')}
        onBlur={(e) => onBlur(e.currentTarget.value ?? '')}
        onClear={onClear}
      />
      {!!errorMessage && <FormErrorMessage message={errorMessage} />}
    </div>
  );
});

export const TextForm = styled(UnstyledTextForm)`
  & > ${FormLabel} + ${TextInput} {
    margin-top: 4px;
  }
`;
