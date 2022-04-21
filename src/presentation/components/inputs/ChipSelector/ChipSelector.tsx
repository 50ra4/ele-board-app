import { Chip, ChipList } from '@/components/display/Chip/Chip';
import React from 'react';
import { ColorPalette } from 'src/presentation/styles/theme';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

export type ChipSelectorProps<T> = {
  className?: string;
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  label: string;
  value: T;
  checked: boolean;
  color: ColorPalette;
  disabled?: boolean;
  readOnly?: boolean;
  onChange: (checked: boolean, value: T) => void;
};

export type StyledChipSelector<T> = StyledComponent<
  (props: ChipSelectorProps<T>) => JSX.Element,
  DefaultTheme,
  Record<string, never>,
  never
>;

export const ChipSelector = React.memo(function ChipSelector<T>({
  className,
  type,
  id,
  name,
  label,
  value,
  checked,
  disabled,
  readOnly,
  color,
  onChange,
}: ChipSelectorProps<T>): JSX.Element {
  const handleOnChange = () => {
    if (disabled || readOnly) return;
    onChange(!checked, value);
  };

  return (
    <ChipSelectorRoot
      className={className}
      disabled={disabled}
      color={color}
      variant={checked ? 'contained' : 'outlined'}
    >
      <ChipLabel htmlFor={id}>
        <HiddenInput type={type} id={id} name={name} checked={checked} onChange={handleOnChange} />
        {label}
      </ChipLabel>
    </ChipSelectorRoot>
  );
}) as <T>(props: ChipSelectorProps<T>) => JSX.Element;

const ChipSelectorRoot = styled(Chip)`
  padding: 0;
`;

const ChipLabel = styled.label<{ disabled?: boolean; readOnly?: boolean }>`
  display: inline-block;
  padding: 8px 16px;
  cursor: ${({ disabled = false, readOnly = false }) =>
    !disabled && !readOnly ? 'pointer' : 'default'};
`;

const HiddenInput = styled.input`
  ${({ theme }) => theme.visuallyHidden()}
`;

export const ChipSelectorGroup = ChipList;
