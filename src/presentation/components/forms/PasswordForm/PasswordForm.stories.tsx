import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { PasswordForm, PasswordFormProps } from './PasswordForm';

export default createStoryMeta(PasswordForm, {
  title: 'forms/PasswordForm',
});

type Story = ComponentStoryObj<PasswordFormProps>;
export const Docs: Story = {
  args: {
    id: 'password-form',
    name: 'password-docs',
    value: 'PasswordForm sample',
    placeholder: 'password sample',
    readonly: false,
    disabled: false,
    label: 'PasswordForm',
    required: true,
    errorMessage: '',
    description: '半角英数6文字以上18文字以下で入力してください',
    onChange: () => {},
    onBlur: () => {},
  },
};
