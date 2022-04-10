import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { ConfirmDialog } from './ConfirmDialog';

export default createStoryMeta(ConfirmDialog, {
  title: 'dialogs/ConfirmDialog',
});

export const Docs = createStoryDocs(ConfirmDialog, {
  id: 'confirm-dialog',
  title: 'ConfirmDialog sample',
  message: 'ConfirmDialog contents',
  onClose: () => {},
  onClickCancel: () => {},
  onClickOK: () => {},
});
