import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { TextForm, TextFormProps } from './TextForm';

export default createStoryMeta(TextForm, {
  title: 'forms/TextForm',
});

type Story = ComponentStoryObj<TextFormProps>;
export const Docs: Story = {
  args: {
    type: 'text',
    id: 'text-form',
    name: 'text-form-docs',
    value: 'TextForm sample',
    placeholder: 'input sample',
    readonly: false,
    disabled: false,
    label: 'TextForm',
    required: true,
    inline: false,
    errorMessage: '',
    description: '',
    onChange: () => {},
    onClear: () => {},
  },
};
