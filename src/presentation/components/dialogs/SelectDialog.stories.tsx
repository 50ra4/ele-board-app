import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { SelectDialog } from './SelectDialog';

export default createStoryMeta(SelectDialog, {
  title: 'dialogs/SelectDialog',
});

export const Docs = createStoryDocs(SelectDialog, {
  id: 'select-dialog',
  title: 'SelectDialog sample',
  message: 'SelectDialog contents',
  onClose: () => {},
  onClickNo: () => {},
  onClickYes: () => {},
  onClickCancel: () => {},
});
