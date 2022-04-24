import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { MailButton } from './MailButton';

export default createStoryMeta(MailButton, {
  title: 'inputs/MailButton',
});

type Story = ComponentStoryObj<ComponentProps<typeof MailButton>>;
export const Docs: Story = {
  args: {
    text: 'メールアドレスでログインする',
    onClick: () => {},
  },
};
