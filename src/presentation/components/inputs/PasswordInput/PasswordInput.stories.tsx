import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { PasswordInput } from './PasswordInput';

export default createStoryMeta(PasswordInput, {
  title: 'inputs/PasswordInput',
});

export const Docs = createStoryDocs(PasswordInput, {
  id: 'password-input',
  name: 'password-input-docs',
  value: 'password input sample',
  hasError: false,
});
