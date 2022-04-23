import React from 'react';
import { ColorPalette } from 'src/presentation/styles/theme';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

type TabColor = Exclude<ColorPalette, 'default'>;

export type TabItem<T extends string> = {
  label: string;
  value: T;
};

export type TabsProps<T extends string> = {
  className?: string;
  items: TabItem<T>[];
  value?: T;
  onChange?: (value: T) => void;
  color?: TabColor;
};

export type StyledTabs<T extends string> = StyledComponent<
  (props: TabsProps<T>) => JSX.Element,
  DefaultTheme,
  Record<string, never>,
  never
>;

/**
 * @see https://www.w3schools.com/howto/howto_js_tabs.asp
 */
export const Tabs = React.memo(function Tabs<T extends string>({
  className,
  value: selectedValue,
  onChange,
  items,
  color = 'primary',
}: TabsProps<T>) {
  return (
    <TabContainer className={className}>
      {items.map(({ label, value }) => (
        <Tab key={value} color={color} isActive={value === selectedValue}>
          <button
            type="button"
            onClick={() => {
              if (value === selectedValue) return;
              if (!onChange) return;
              onChange(value);
            }}
          >
            <span>{label}</span>
          </button>
        </Tab>
      ))}
    </TabContainer>
  );
}) as <T extends string>(props: TabsProps<T>) => JSX.Element;

const TabContainer = styled.ul`
  height: 48px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.light};
  display: flex;
  margin: 0;
  padding: 0;
`;

const Tab = styled.li<{ color: TabColor; isActive?: boolean }>`
  & > button {
    height: 100%;
    background-color: inherit;
    cursor: pointer;
    transition: border-bottom 0.3s linear;

    border: none;
    border-bottom: ${({ isActive, color, theme }) =>
      isActive ? `3px solid ${theme.color[color].background}` : 'none'};
    padding-bottom: ${({ isActive }) => (isActive ? '0' : '3px')};

    &:focus {
      outline: 3px solid ${({ theme }) => theme.input.color.focused.outline};
      outline-offset: -2px;
    }

    & > span {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      color: ${({ isActive, color, theme }) =>
        isActive ? theme.color[color].background : theme.color.default.font};
      padding: 0 16px;
    }
  }
`;
