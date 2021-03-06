import styled from 'styled-components';
import { IconButton } from '../../../inputs/IconButton/IconButton';
import { CloseIcon } from '../../../icons/CloseIcon';

export type DialogProps = {
  className?: string;
  id: string;
  title?: string;
  onClose: () => void;
};

export type CustomDialogProps = DialogProps & {
  children: React.ReactNode;
};

function UnstyledCustomDialog({ className, id, title, onClose, children }: CustomDialogProps) {
  const dialogId = `dialog-${id}`;
  const dialogLabelId = title ? `${dialogId}__label` : undefined;
  const dialogDescribedId = typeof children === 'string' ? `${dialogId}__described` : undefined;

  return (
    <div
      className={className}
      role="dialog"
      id={id}
      aria-labelledby={dialogLabelId}
      aria-describedby={dialogDescribedId}
      aria-modal="true"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <IconButton onClick={onClose}>
        <CloseIcon color="primary" size="large" titleAccess="ダイアログを閉じる" />
      </IconButton>
      {title && <DialogTitle id={dialogLabelId}>{title}</DialogTitle>}
      <DialogContent id={dialogDescribedId}>{children}</DialogContent>
    </div>
  );
}

const DialogTitle = styled.h2`
  color: ${({ theme }) => theme.color.card.font};
  background-color: ${({ theme }) => theme.color.card.background};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 18px;
  line-height: 38px;
  height: 38px;
  padding: 0 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.light};
`;

export const DialogContent = styled.div`
  flex: 1 1 auto;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.card.background};
`;

export const CustomDialog = styled(UnstyledCustomDialog)`
  width: 600px;
  max-width: 90%;
  min-height: 300px;
  max-height: 90%;

  display: flex;
  flex-direction: column;
  position: relative;

  padding: 4px;

  & ${IconButton} {
    position: absolute;
    top: calc(0 - 4px); // for padding
    right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal + 1};
    background-color: transparent;
    height: 36px;
    width: 36px;
  }
`;

export const DialogMessage = styled.div`
  flex: 1 1 auto;
  min-height: 180px;
`;
