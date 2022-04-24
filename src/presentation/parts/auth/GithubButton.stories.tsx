import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { GithubButton } from './GithubButton';

export default createStoryMeta(GithubButton, {
  title: 'parts/auth/GithubButton',
});

type Story = ComponentStoryObj<ComponentProps<typeof GithubButton>>;
export const Docs: Story = {
  args: {
    text: 'Githubアカウントでログインする',
    onClick: () => {},
  },
};
