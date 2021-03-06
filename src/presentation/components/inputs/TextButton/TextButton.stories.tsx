import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { TextButton, TextButtonProps } from './TextButton';

export default createStoryMeta(TextButton, {
  title: 'inputs/TextButton',
});

type Story = ComponentStoryObj<TextButtonProps>;
export const Docs: Story = {
  args: {
    text: 'TextButton',
    color: 'primary',
    variant: 'contained',
    onClick: () => {},
  },
};
