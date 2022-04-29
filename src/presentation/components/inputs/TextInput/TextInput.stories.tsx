import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { TextInput, TextInputProps } from './TextInput';

export default createStoryMeta(TextInput, {
  title: 'inputs/TextInput',
});

type Story = ComponentStoryObj<TextInputProps>;
export const Docs: Story = {
  args: {
    id: 'text-input',
    name: 'text-input-docs',
    value: 'text input sample',
    hasError: false,
    onClear: () => {},
  },
};
