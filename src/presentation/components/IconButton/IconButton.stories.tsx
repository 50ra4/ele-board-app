import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { DeleteIcon } from '../icons/DeleteIcon';
import { IconButton } from './IconButton';

export default createStoryMeta(IconButton, {
  title: 'IconButton',
});

export const Docs = createStoryDocs(IconButton, {
  children: <DeleteIcon color="primary" size="large" titleAccess="削除" />,
  onClick: () => {},
});
