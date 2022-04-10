import { createStoryDocs, createStoryMeta } from 'src/utils/storybookUtils';
import { Snackbar } from './Snackbar';

export default createStoryMeta(Snackbar, {
  title: 'Snackbar',
});

export const Docs = createStoryDocs(Snackbar, {
  severity: 'info',
  children: 'snackbar',
});

export const Info = () => {
  return <Snackbar severity="info">Info snackbar</Snackbar>;
};

export const Success = () => {
  return <Snackbar severity="success">Success snackbar</Snackbar>;
};

export const Warning = () => {
  return <Snackbar severity="warning">Warning snackbar</Snackbar>;
};

export const Error = () => {
  return <Snackbar severity="error">Error snackbar</Snackbar>;
};

export const LongText = () => {
  return (
    <Snackbar severity="info">
      {`${Array.from({ length: 20 })
        .map(() => 'long')
        .join(' ')} text`}
    </Snackbar>
  );
};
