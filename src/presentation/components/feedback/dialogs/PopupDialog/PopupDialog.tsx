import React from 'react';
import { CustomDialog, DialogMessage, DialogProps } from '../CustomDialog/CustomDialog';

export type PopupDialogProps = DialogProps & { message: React.ReactNode };

export const PopupDialog = React.memo(function PopupDialog({
  message,
  ...props
}: PopupDialogProps) {
  return (
    <CustomDialog {...props}>
      <DialogMessage>{message}</DialogMessage>
    </CustomDialog>
  );
});
