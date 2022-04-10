import styled from 'styled-components';
import { IconButton } from '@/components/IconButton/IconButton';
import { VisibilityIcon } from '@/components/icons/VisibilityIcon';

type VisibilityButtonProps = {
  className?: string;
  label: string;
  visible?: boolean;
  onClick: () => void;
};

function UnstyledVisibilityButton({ className, label, visible, onClick }: VisibilityButtonProps) {
  return (
    <IconButton className={className} onClick={onClick}>
      <VisibilityIcon size="medium" titleAccess={label} visible={visible} />
    </IconButton>
  );
}

export const VisibilityButton = styled(UnstyledVisibilityButton)``;
