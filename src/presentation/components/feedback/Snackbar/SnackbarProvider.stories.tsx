import React from 'react';
import { createStoryMeta } from 'src/utils/storybookUtils';
import styled from 'styled-components';
import { SnackbarProvider, useSnackBar } from './SnackbarProvider';

const Button = styled.button`
  padding: 8px 16px;
  & + & {
    margin-left: 8px;
  }
`;

export default createStoryMeta(SnackbarProvider, {
  title: 'feedback/Snackbar/SnackbarProvider',
});

const PlayButtons = () => {
  const { enqueue } = useSnackBar();

  const onFadeOut = (id: string) => {
    console.log(`fadeout:${id}`);
  };

  return (
    <div>
      <Button
        onClick={() => {
          enqueue('info', { severity: 'info', onFadeOut });
        }}
      >
        info
      </Button>
      <Button
        onClick={() => {
          enqueue('success', { severity: 'success', onFadeOut });
        }}
      >
        success
      </Button>
      <Button
        onClick={() => {
          enqueue('warning', { severity: 'warning', onFadeOut });
        }}
      >
        warning
      </Button>
      <Button
        onClick={() => {
          enqueue('error', { severity: 'error', duration: 10000, onFadeOut });
        }}
      >
        error
      </Button>
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
