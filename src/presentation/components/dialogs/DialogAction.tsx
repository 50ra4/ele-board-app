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

export function DialogAction({ className, ...props }: DialogActionProps) {
  switch (props.type) {
    case 'alert':
      return (
        <ButtonWrap className={className}>
          <TextButton color="secondary" text="OK" onClick={props.onClickOK} fullWidth={true} />
        </ButtonWrap>
      );
    case 'confirm':
      return (
        <ButtonWrap className={className}>
          <TextButton color="secondary" text="OK" onClick={props.onClickOK} fullWidth={true} />
          <TextButton
            color="default"
            text="キャンセル"
            onClick={props.onClickCancel}
            fullWidth={true}
          />
        </ButtonWrap>
      );
    case 'select':
      return (
        <ButtonWrap className={className}>
          <TextButton color="secondary" text="はい" onClick={props.onClickYes} fullWidth={true} />
          <TextButton color="primary" text="いいえ" onClick={props.onClickNo} fullWidth={true} />
          {props.onClickCancel && (
            <TextButton
              color="default"
              text="キャンセル"
              onClick={props.onClickCancel}
              fullWidth={true}
            />
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
  }
`;
