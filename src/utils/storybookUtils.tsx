import React, { ComponentType } from 'react';
import type {
  ComponentStoryObj as _ComponentStoryObj,
  ComponentMeta as _ComponentMeta,
} from '@storybook/react';

export const createStoryMeta = <T extends React.VFC<any>>(
  Component: T,
  { title, ...params }: { title: string } & Omit<_ComponentMeta<T>, 'title' | 'component'>,
): _ComponentMeta<T> => ({
  title: title,
  component: Component,
  ...params,
});

export type ComponentStoryObj<P extends Record<string, unknown>> = _ComponentStoryObj<
  ComponentType<P>
>;

export const LOREM_IPSUM_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const FRUIT_NAME = {
  apple: '林檎',
  strawberry: '苺',
  orange: 'オレンジ',
  grapefruit: 'グレープフルーツ',
  coconut: 'ココナッツ',
  cherry: 'さくらんぼ',
  pineapple: 'パイナップル',
  banana: 'バナナ',
  grape: '葡萄',
  raspberry: '木苺',
} as const;
