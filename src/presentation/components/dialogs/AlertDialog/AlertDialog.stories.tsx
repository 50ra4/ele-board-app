import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { AlertDialog, AlertDialogProps } from './AlertDialog';

export default createStoryMeta(AlertDialog, {
  title: 'dialogs/AlertDialog',
});

type Story = ComponentStoryObj<AlertDialogProps>;
export const Docs: Story = {
  args: {
    id: 'alert-dialog',
    title: 'AlertDialog sample',
    message: 'AlertDialog contents',
    onClickOK: () => {},
    onClose: () => {},
  },
};
