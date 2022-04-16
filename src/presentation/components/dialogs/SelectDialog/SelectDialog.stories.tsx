import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { SelectDialog, SelectDialogProps } from './SelectDialog';

export default createStoryMeta(SelectDialog, {
  title: 'dialogs/SelectDialog',
});

type Story = ComponentStoryObj<SelectDialogProps>;
export const Docs: Story = {
  args: {
    id: 'select-dialog',
    title: 'SelectDialog sample',
    message: 'SelectDialog contents',
    onClose: () => {},
    onClickNo: () => {},
    onClickYes: () => {},
    onClickCancel: () => {},
  },
};
