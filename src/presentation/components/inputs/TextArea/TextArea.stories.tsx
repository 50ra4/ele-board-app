import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { TextArea } from './TextArea';

export default createStoryMeta(TextArea, {
  title: 'inputs/TextArea',
});

export const Docs = createStoryDocs(TextArea, {
  id: 'TextArea',
  name: 'text-area-docs',
  value: 'TextArea sample',
  hasError: false,
});
