import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { TextForm } from './TextForm';

export default createStoryMeta(TextForm, {
  title: 'forms/TextForm',
});

export const Docs = createStoryDocs(TextForm, {
  type: 'text',
  id: 'text-form',
  name: 'text-form-docs',
  value: 'TextForm sample',
  placeholder: 'input sample',
  readonly: false,
  disabled: false,
  label: 'TextForm',
  required: true,
  inline: false,
  errorMessage: '',
  description: '',
  onChange: () => {},
  onClear: () => {},
});
