import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { PopupDialog, PopupDialogProps } from './PopupDialog';

export default createStoryMeta(PopupDialog, {
  title: 'dialogs/PopupDialog',
});

type Story = ComponentStoryObj<PopupDialogProps>;
export const Docs: Story = {
  args: {
    id: 'popup-dialog',
    title: 'PopupDialog sample',
    message: 'PopupDialog contents',
    onClose: () => {},
  },
};
