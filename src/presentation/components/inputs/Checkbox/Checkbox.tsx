import React from 'react';
import styled, { css, DefaultTheme, StyledComponent } from 'styled-components';

import { ColorPalette } from 'src/presentation/styles/theme';
import { CheckboxIcon } from '@/components/icons/CheckboxIcon';
import { IconSize } from '@/components/icons/SvgIcon';

type OwnProps<T> = {
  id: string;
  label: string;
  name: string;
  value: T;
  checked: boolean;
  onChange: (checked: boolean, value: T) => void;
  color: Exclude<ColorPalette, 'default'>;
  disabled?: boolean;
  readOnly?: boolean;
  size?: IconSize;
};

export type CheckboxProps<T> = OwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<'input'>, keyof OwnProps<T> | 'children' | 'type'>;

export type StyledCheckbox<T> = StyledComponent<
  (props: CheckboxProps<T>) => JSX.Element,
  DefaultTheme,
  Record<string, never>,
  never
>;

export const Checkbox = React.memo(function Checkbox<T>({
  className,
  id,
  label,
  name,
  value,
  checked,
  onChange,
  size = 'medium',
  disabled,
  readOnly,
  color,
  ...props
}: CheckboxProps<T>) {
  const handleOnChange = () => {
    onChange(!checked, value);
  };

  return (
    <CheckboxRoot className={className}>
      <CheckboxLabel htmlFor={id} size={size}>
        <HiddenInput
          {...props}
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={handleOnChange}
          disabled={disabled || readOnly}
        />
        <StyledCheckboxIcon
          checked={checked}
          size={size}
          color={disabled || readOnly ? 'default' : color}
        />
        {label}
      </CheckboxLabel>
    </CheckboxRoot>
  );
}) as <T>(props: CheckboxProps<T>) => JSX.Element;

const CheckboxRoot = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const CheckboxLabel = styled.label<{ size: IconSize; disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'default')};
  font-size: 16px;
`;

const StyledCheckboxIcon = styled(CheckboxIcon)`
  margin-right: 4px;
`;

const HiddenInput = styled.input`
  ${({ theme }) => theme.visuallyHidden()}
`;

export const CheckboxGroup = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  ${({ direction }) =>
    direction === 'column'
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `};
`;
