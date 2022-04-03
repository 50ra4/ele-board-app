import styled from 'styled-components';
import { IconButton } from '../IconButton/IconButton';
import { HighLightOffIcon } from '../icons/HighLightOff';

export type InputClearButtonProps = {
  className?: string;
  areaLabel: string;
  onClick: () => void;
};

function UnstyledInputClearButton({ className, areaLabel, onClick }: InputClearButtonProps) {
  return (
    <IconButton className={className} onClick={onClick}>
      <HighLightOffIcon size="medium" titleAccess={areaLabel} />
    </IconButton>
  );
}

export const InputClearButton = styled(UnstyledInputClearButton)``;
