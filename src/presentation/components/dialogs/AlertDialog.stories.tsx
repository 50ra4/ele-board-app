import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { AlertDialog } from './AlertDialog';

export default createStoryMeta(AlertDialog, {
  title: 'dialogs/AlertDialog',
});

export const Docs = createStoryDocs(AlertDialog, {
  id: 'alert-dialog',
  title: 'AlertDialog sample',
  message: 'AlertDialog contents',
  onClickOK: () => {},
  onClose: () => {},
});
