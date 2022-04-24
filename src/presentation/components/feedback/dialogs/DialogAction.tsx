import React from 'react';
import styled from 'styled-components';
import { TextButton } from '../../inputs/TextButton/TextButton';

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

export function DialogAction({ className, ...props }: DialogActionProps) {
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
          <TextButton color="secondary" text="OK" onClick={props.onClickOK} />
          <TextButton color="default" text="キャンセル" onClick={props.onClickCancel} />
        </ButtonWrap>
      );
    case 'select':
      return (
        <ButtonWrap className={className}>
          <TextButton color="secondary" text="はい" onClick={props.onClickYes} />
          <TextButton color="primary" text="いいえ" onClick={props.onClickNo} />
          {props.onClickCancel && (
            <TextButton color="default" text="キャンセル" onClick={props.onClickCancel} />
          )}
        </ButtonWrap>
      );

    default:
      return null;
  }
}

const ButtonWrap = styled.div`
  & > ${TextButton} {
    margin-top: 8px;
    width: 100%;
  }
`;
