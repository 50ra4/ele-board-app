import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { InputBase } from './InputBase';

export default createStoryMeta(InputBase, {
  title: 'inputs/InputBase',
});

export const Docs = createStoryDocs(InputBase, {
  type: 'text',
  id: 'input-base',
  name: 'input-base-docs',
  value: 'input base sample',
  hasError: false,
  paddingSpace: 'right',
});
