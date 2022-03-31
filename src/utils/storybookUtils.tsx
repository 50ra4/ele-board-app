import React, { ComponentProps } from 'react';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

export const createStoryMeta = <T extends React.FC<any>>(
  Component: T,
  { title, ...params }: { title: string } & Omit<ComponentMeta<T>, 'title' | 'component'>,
): ComponentMeta<T> => ({
  title: title,
  component: Component,
  ...params,
});

export const createStoryDocs = <
  Component extends React.FC<any>,
  Props extends Record<string, unknown> = ComponentProps<Component>,
>(
  _: Component,
  props: Props,
  obj: Omit<ComponentStoryObj<Component>, 'args'> = {},
) => ({ ...obj, args: props });
