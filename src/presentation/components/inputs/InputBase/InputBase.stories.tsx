import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { InputBase, InputBaseProps } from './InputBase';

export default createStoryMeta(InputBase, {
  title: 'inputs/InputBase',
});

type Story = ComponentStoryObj<InputBaseProps>;
export const Docs: Story = {
  args: {
    type: 'text',
    id: 'input-base',
    name: 'input-base-docs',
    value: 'input base sample',
    hasError: false,
    onChange: () => {},
  },
};
