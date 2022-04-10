import React from 'react';
import styled from 'styled-components';
import {
  DialogProps,
  DialogMessage,
  CustomDialog,
  DialogContent,
} from '../CustomDialog/CustomDialog';
import { AlertDialogAction, DialogAction } from '../DialogAction';

export type AlertDialogProps = DialogProps &
  Omit<AlertDialogAction, 'type'> & {
    message: React.ReactNode;
  };

export const AlertDialog = React.memo(function AlertDialog({
  message,
  onClickOK,
  ...props
}: AlertDialogProps) {
  return (
    <StyledCustomDialog {...props}>
      <DialogMessage>{message}</DialogMessage>
      <DialogAction type="alert" onClickOK={onClickOK} />
    </StyledCustomDialog>
  );
});

const StyledCustomDialog = styled(CustomDialog)`
  & ${DialogContent} {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
`;
