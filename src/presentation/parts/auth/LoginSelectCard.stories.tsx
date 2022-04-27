import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { LoginSelectCard, LoginAccountItem } from './LoginSelectCard';

export default createStoryMeta(LoginSelectCard, {
  title: 'parts/auth/LoginSelectCard',
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

type Story = ComponentStoryObj<ComponentProps<typeof LoginSelectCard>>;
export const Docs: Story = {
  args: {
    title: 'ログイン',
    items,
  },
};
