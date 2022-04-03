import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { TextInput } from './TextInput';

export default createStoryMeta(TextInput, {
  title: 'inputs/TextInput',
});

export const Docs = createStoryDocs(TextInput, {
  id: 'text-input',
  name: 'text-input-docs',
  value: 'text input sample',
  hasError: false,
  onClear: () => {},
});
