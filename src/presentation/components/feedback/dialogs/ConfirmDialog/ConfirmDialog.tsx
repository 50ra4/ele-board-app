import React from 'react';
import styled from 'styled-components';
import {
  DialogProps,
  DialogMessage,
  CustomDialog,
  DialogContent,
} from '../CustomDialog/CustomDialog';
import { ConfirmDialogAction, DialogAction } from '../DialogAction';

export type ConfirmDialogProps = DialogProps &
  Omit<ConfirmDialogAction, 'type'> & {
    message: React.ReactNode;
  };

export const ConfirmDialog = React.memo(function ConfirmDialog({
  message,
  onClickOK,
  onClickCancel,
  ...props
}: ConfirmDialogProps) {
  return (
    <StyledCustomDialog {...props}>
      <DialogMessage>{message}</DialogMessage>
      <DialogAction type="confirm" onClickCancel={onClickCancel} onClickOK={onClickOK} />
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
