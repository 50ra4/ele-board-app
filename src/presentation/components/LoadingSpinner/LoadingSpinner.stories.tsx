import { LoadingSpinner } from './LoadingSpinner';
import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';

export default createStoryMeta(LoadingSpinner, {
  title: 'LoadingSpinner',
});

export const Docs = createStoryDocs(LoadingSpinner, {
  color: 'primary',
  size: 'large',
});
