import React from 'react';
import styled from 'styled-components';
import { TextButton } from '../TextButton/TextButton';

export type PopupDialogAction = {
  type: 'popup';
};
export type AlertDialogAction = {
  type: 'alert';
  onClickOK: () => void;
};
export type ConfirmDialogAction = {
  type: 'confirm';
  onClickCancel: () => void;
  onClickOK: () => void;
};
export type SelectDialogAction = {
  type: 'select';
  onClickCancel?: () => void;
  onClickNo: () => void;
  onClickYes: () => void;
};

type DialogActions =
  | PopupDialogAction
  | AlertDialogAction
  | ConfirmDialogAction
  | SelectDialogAction;

export type DialogActionProps = {
  className?: string;
} & DialogActions;

export const DialogAction = React.memo(function DialogActions({
  className,
  ...props
}: DialogActionProps) {
  switch (props.type) {
    case 'alert':
      return (
        <ButtonWrap className={className}>
          <TextButton color="secondary" text="OK" onClick={props.onClickOK} />
        </ButtonWrap>
      );
    case 'confirm':
      return (
        <ButtonWrap className={className}>
          <TextButton color="default" text="キャンセル" onClick={props.onClickCancel} />
          <TextButton color="secondary" text="OK" onClick={props.onClickOK} />
        </ButtonWrap>
      );
    case 'select':
      return (
        <ButtonWrap className={className}>
          {props.onClickCancel && (
            <TextButton color="default" text="キャンセル" onClick={props.onClickCancel} />
          )}
          <TextButton color="primary" text="いいえ" onClick={props.onClickNo} />
          <TextButton color="secondary" text="はい" onClick={props.onClickYes} />
        </ButtonWrap>
      );

    default:
      return null;
  }
});

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  & > ${TextButton} {
    min-width: 100px;
  }
`;
