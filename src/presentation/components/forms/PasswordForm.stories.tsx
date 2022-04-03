import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { PasswordForm } from './PasswordForm';

export default createStoryMeta(PasswordForm, {
  title: 'forms/PasswordForm',
});

export const Docs = createStoryDocs(PasswordForm, {
  id: 'password-form',
  name: 'password-docs',
  value: 'PasswordForm sample',
  placeholder: 'password sample',
  readonly: false,
  disabled: false,
  label: 'PasswordForm',
  required: true,
  inline: false,
  errorMessage: '',
  description: '',
  onChange: () => {},
  onClear: () => {},
});
