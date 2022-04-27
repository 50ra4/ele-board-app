import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { LoginAccountSelector, LoginAccountItem } from './LoginAccountSelector';

export default createStoryMeta(LoginAccountSelector, {
  title: 'parts/auth/LoginAccountSelector',
});

const items: LoginAccountItem[] = [
  {
    type: 'mail',
    label: 'メールアドレスでログイン',
  },
  {
    type: 'google',
    label: 'Googleアカウントでログイン',
  },
  {
    type: 'github',
    label: 'Githubアカウントでログイン',
  },
];

type Story = ComponentStoryObj<ComponentProps<typeof LoginAccountSelector>>;
export const Docs: Story = {
  args: {
    items,
  },
};
