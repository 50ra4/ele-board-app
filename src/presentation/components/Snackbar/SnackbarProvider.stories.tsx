import React from 'react';
import { createStoryMeta } from 'src/utils/storybookUtils';
import { TextButton } from '../inputs/TextButton/TextButton';
import { SnackbarProvider, useSnackBar } from './SnackbarProvider';

export default createStoryMeta(SnackbarProvider, {
  title: 'Snackbar/SnackbarProvider',
});

const PlayButtons = () => {
  const { enqueue } = useSnackBar();

  const onFadeOut = (id: string) => {
    console.log(`fadeout:${id}`);
  };

  return (
    <div>
      <TextButton
        color="primary"
        text="info"
        onClick={() => {
          enqueue('info', { severity: 'info', onFadeOut });
        }}
      />
      <TextButton
        color="primary"
        text="success"
        onClick={() => {
          enqueue('success', { severity: 'success', onFadeOut });
        }}
      />
      <TextButton
        color="primary"
        text="Popup"
        onClick={() => {
          enqueue('warning', { severity: 'warning', onFadeOut });
        }}
      />
      <TextButton
        color="primary"
        text="Popup"
        onClick={() => {
          enqueue('error', { severity: 'error', duration: 10000, onFadeOut });
        }}
      />
    </div>
  );
};

export const Play = () => {
  return (
    <SnackbarProvider>
      <PlayButtons />
    </SnackbarProvider>
  );
};
