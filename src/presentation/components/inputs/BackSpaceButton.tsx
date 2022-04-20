import styled from 'styled-components';
import { IconButton } from './IconButton/IconButton';
import { BackSpaceIcon } from '../icons/BackSpaceIcon';

export type BackSpaceButtonProps = {
  className?: string;
  areaLabel: string;
  onClick: () => void;
};

function UnstyledBackSpaceButton({ className, areaLabel, onClick }: BackSpaceButtonProps) {
  return (
    <IconButton className={className} onClick={onClick}>
      <BackSpaceIcon size="medium" titleAccess={areaLabel} />
    </IconButton>
  );
}

export const BackSpaceButton = styled(UnstyledBackSpaceButton)``;
