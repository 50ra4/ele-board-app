import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { Button, ButtonProps } from '@/components/inputs/Button/Button';

export default createStoryMeta(Button, {
  title: 'inputs/Button',
});

type Story = ComponentStoryObj<ButtonProps>;
export const Docs: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    children: 'Docs',
    onClick: () => {},
  },
};

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
