import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { MailLoginForm } from './MailLoginForm';

export default createStoryMeta(MailLoginForm, {
  title: 'parts/auth/MailLoginForm',
  argTypes: {
    type: {
      options: ['signIn', 'signUp'],
      control: { type: 'select' },
    },
  },
});

type Story = ComponentStoryObj<ComponentProps<typeof MailLoginForm>>;
export const Docs: Story = {
  args: {
    isProcessing: false,
    type: 'signIn',
    onSubmit: () => {},
  },
};
