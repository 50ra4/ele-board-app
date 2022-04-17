import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { Divider } from './Divider';

export default createStoryMeta(Divider, {
  title: 'utils/Divider',
});

type Story = ComponentStoryObj<ComponentProps<typeof Divider>>;
export const Docs: Story = {
  args: {},
};
