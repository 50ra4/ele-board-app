import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { LoginAccountSelector } from './LoginAccountSelector';

export default createStoryMeta(LoginAccountSelector, {
  title: 'parts/auth/LoginAccountSelector',
});

type Story = ComponentStoryObj<ComponentProps<typeof LoginAccountSelector>>;
export const Docs: Story = {
  args: {},
};
