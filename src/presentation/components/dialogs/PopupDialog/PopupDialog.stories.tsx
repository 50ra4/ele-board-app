import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { PopupDialog } from './PopupDialog';

export default createStoryMeta(PopupDialog, {
  title: 'dialogs/PopupDialog',
});

export const Docs = createStoryDocs(PopupDialog, {
  id: 'popup-dialog',
  title: 'PopupDialog sample',
  message: 'PopupDialog contents',
  onClose: () => {},
});
