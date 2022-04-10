import React from 'react';
import styled from 'styled-components';
import {
  CustomDialog,
  DialogProps,
  DialogContent,
  DialogMessage,
} from '../CustomDialog/CustomDialog';
import { SelectDialogAction, DialogAction } from '../DialogAction';

export type SelectDialogProps = DialogProps &
  Omit<SelectDialogAction, 'type'> & {
    message: React.ReactNode;
  };

export const SelectDialog = React.memo(function SelectDialog({
  message,
  onClickYes,
  onClickNo,
  onClickCancel,
  ...props
}: SelectDialogProps) {
  return (
    <StyledCustomDialog {...props}>
      <DialogMessage>{message}</DialogMessage>
      <DialogAction
        type="select"
        onClickCancel={onClickCancel}
        onClickYes={onClickYes}
        onClickNo={onClickNo}
      />
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
