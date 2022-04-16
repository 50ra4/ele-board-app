import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { ConfirmDialog, ConfirmDialogProps } from './ConfirmDialog';

export default createStoryMeta(ConfirmDialog, {
  title: 'dialogs/ConfirmDialog',
});

type Story = ComponentStoryObj<ConfirmDialogProps>;
export const Docs: Story = {
  args: {
    id: 'confirm-dialog',
    title: 'ConfirmDialog sample',
    message: 'ConfirmDialog contents',
    onClose: () => {},
    onClickCancel: () => {},
    onClickOK: () => {},
  },
};
