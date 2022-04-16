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
