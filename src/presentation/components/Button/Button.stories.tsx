import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { Button } from '@/components/Button/Button';

export default createStoryMeta(Button, {
  title: 'Button',
});

export const Docs = createStoryDocs(Button, {
  color: 'primary',
  children: 'Docs',
});

export const Primary = () => <Button color="primary">Primary</Button>;

export const Secondary = () => <Button color="secondary">Secondary</Button>;

export const Outlined = () => (
  <Button color="primary" variant="outlined">
    Outlined
  </Button>
);

export const Disabled = () => (
  <Button color="primary" disabled={true}>
    Disabled
  </Button>
);

export const FullWidth = () => (
  <Button color="primary" fullWidth={true}>
    FullWidth
  </Button>
);
