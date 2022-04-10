import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { CustomDialog } from './CustomDialog';

export default createStoryMeta(CustomDialog, {
  title: 'dialogs/CustomDialog',
});

export const Docs = createStoryDocs(CustomDialog, {
  id: 'custom-dialog',
  title: 'Custom dialog sample',
  children: 'Custom dialog contents',
  onClose: () => {},
});
