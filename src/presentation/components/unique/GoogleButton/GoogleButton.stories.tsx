import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { GoogleButton } from './GoogleButton';

export default createStoryMeta(GoogleButton, {
  title: 'unique/GoogleButton',
});

type Story = ComponentStoryObj<ComponentProps<typeof GoogleButton>>;
export const Docs: Story = {
  args: {
    text: 'Googleアカウントでログインする',
    onClick: () => {},
  },
};
