import styled from 'styled-components';
import { IconButton } from '../IconButton/IconButton';
import { CloseIcon } from '../icons/CloseIcon';

export type CustomDialogProps = {
  className?: string;
  id: string;
  title?: string;
  onClose: () => void;
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
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <CloseIcon color="primary" size="large" titleAccess="ダイアログを閉じる" />
      </IconButton>
      {title && <DialogTitle id={dialogLabelId}>{title}</DialogTitle>}
      <DialogContent id={dialogDescribedId}>{children}</DialogContent>
    </div>
  );
}

const DialogTitle = styled.h2`
  color: ${({ theme }) => theme.color.default.font};
  background-color: ${({ theme }) => theme.color.default.background};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 18px;
  line-height: 38px;
  height: 38px;
  padding: 0 8px;
`;
const DialogContent = styled.div`
  min-width: 100%;
  padding: 8px;
`;

export const CustomDialog = styled(UnstyledCustomDialog)`
  width: 640px;
  max-width: 90%;
  min-height: 320px;

  display: flex;
  flex-direction: column;
  position: relative;

  border: 1px solid #dadce0;
  border-radius: 3px;

  & ${IconButton} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal + 1};
    background-color: transparent;
    height: 36px;
    width: 36px;
  }
`;
