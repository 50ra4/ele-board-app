import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { TextArea, TextAreaProps } from './TextArea';

export default createStoryMeta(TextArea, {
  title: 'inputs/TextArea',
});

type Story = ComponentStoryObj<TextAreaProps>;
export const Docs: Story = {
  args: {
    id: 'TextArea',
    name: 'text-area-docs',
    value: 'TextArea sample',
    hasError: false,
    onChange: () => {},
  },
};
