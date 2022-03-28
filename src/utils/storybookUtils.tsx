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

export const createStoryDocs = <T extends React.FC<any>>(
  _: T,
  props: ComponentProps<T>,
  obj: Omit<ComponentStoryObj<T>, 'args'> = {},
) => ({ ...obj, args: props });
