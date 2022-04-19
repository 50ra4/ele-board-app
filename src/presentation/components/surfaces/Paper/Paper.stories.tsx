import { ComponentStoryObj, createStoryMeta, LOREM_IPSUM_TEXT } from 'src/utils/storybookUtils';
import { Paper, PaperProps } from './Paper';

export default createStoryMeta(Paper, {
  title: 'surfaces/Paper',
});

type Story = ComponentStoryObj<PaperProps>;
export const Docs: Story = {
  args: {
    children: LOREM_IPSUM_TEXT,
  },
};
