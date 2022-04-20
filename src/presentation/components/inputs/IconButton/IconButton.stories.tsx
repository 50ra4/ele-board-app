import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { DeleteIcon } from '../../icons/DeleteIcon';
import { IconButton, IconButtonProps } from './IconButton';

export default createStoryMeta(IconButton, {
  title: 'inputs/IconButton',
});

type Story = ComponentStoryObj<IconButtonProps>;
export const Docs: Story = {
  args: {
    children: <DeleteIcon color="primary" size="large" titleAccess="削除" />,
    onClick: () => {},
  },
};
