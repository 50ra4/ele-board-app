import React, { ComponentProps, ComponentType } from 'react';
import type {
  ComponentStoryObj as _ComponentStoryObj,
  ComponentMeta as _ComponentMeta,
  ComponentStoryFn,
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

export const createStoryDocs = <
  Component extends React.VFC<any>,
  Props extends Record<string, unknown> = ComponentProps<Component>,
>(
  _: Component,
  props: Props,
  obj: Omit<_ComponentStoryObj<Component>, 'args'> = {},
) => ({ ...obj, args: props });

export const createComponentMeta = <
  Props extends Record<string, unknown>,
  Component extends React.VFC<Props> = React.VFC<Props>,
>(
  component: Component,
  { title, ...params }: { title: string } & Omit<_ComponentMeta<Component>, 'title' | 'component'>,
): _ComponentMeta<Component> => ({
  ...params,
  title,
  component,
});

export const createStoryTemplate =
  <Props extends Record<string, unknown>, C extends React.VFC<any> = React.VFC<Props>>(
    Component: C,
  ): ComponentStoryFn<C> =>
  (args) =>
    <Component {...args} />;
