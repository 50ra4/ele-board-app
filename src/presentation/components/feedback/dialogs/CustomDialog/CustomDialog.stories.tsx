import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { CustomDialog, CustomDialogProps } from './CustomDialog';

export default createStoryMeta(CustomDialog, {
  title: 'feedback/dialogs/CustomDialog',
});

type Story = ComponentStoryObj<CustomDialogProps>;
export const Docs: Story = {
  args: {
    id: 'custom-dialog',
    title: 'Custom dialog sample',
    children: 'Custom dialog contents',
    onClose: () => {},
  },
};
