import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

export default createStoryMeta(PasswordInput, {
  title: 'inputs/PasswordInput',
});

type Story = ComponentStoryObj<PasswordInputProps>;
export const Docs: Story = {
  args: {
    id: 'password-input',
    name: 'password-input-docs',
    value: 'password input sample',
    hasError: false,
  },
};
