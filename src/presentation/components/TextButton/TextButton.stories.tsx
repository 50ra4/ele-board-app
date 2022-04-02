import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { TextButton, TextButtonProps } from './TextButton';

export default createStoryMeta(TextButton, {
  title: 'TextButton',
});

export const Docs = createStoryDocs<typeof TextButton, TextButtonProps>(TextButton, {
  text: 'TextButton',
  color: 'primary',
  variant: 'contained',
  fullWidth: false,
  onClick: () => {},
});
