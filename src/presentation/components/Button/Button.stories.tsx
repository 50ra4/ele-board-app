import { createStoryDocs, createStoryMeta } from 'src/presentation/utils/storybookUtils';
import { Button } from './Button';

export default createStoryMeta(Button, {
  title: 'Button',
});

export const Docs = createStoryDocs(Button, {
  children: 'Docs',
});

export const FullWidth = () => (
  <Button color="primary" fullWidth={true}>
    FullWidth
  </Button>
);
