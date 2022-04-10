import React from 'react';
import styled from 'styled-components';
import { InfoIcon } from '../icons/InfoIcon';
import { WarningIcon } from '../icons/WarningIcon';

const SNACKBAR_SEVERITY = {
  success: {
    font: '#fafafa',
    background: '#2e7c31',
  },
  error: {
    font: '#fafafa',
    background: '#c62828',
  },
  warning: {
    font: '#212121',
    background: '#fdd835',
  },
  info: {
    font: '#fafafa',
    background: '#0d47a1',
  },
} as const;
export type SnackbarSeverity = keyof typeof SNACKBAR_SEVERITY;

type OwnProps = {
  className?: string;
  severity: SnackbarSeverity;
  children: React.ReactNode;
};

export type SnackbarProps = OwnProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof OwnProps>;

function UnstyledSnackbar({ className, severity, children, ...props }: SnackbarProps) {
  return (
    <div className={className} {...props}>
      <SnackbarIconWrap>
        <SnackbarIcon severity={severity} />
      </SnackbarIconWrap>
      <SnackbarContent>{children}</SnackbarContent>
    </div>
  );
}

const SnackbarIconWrap = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 100%;
  margin-right: 4px;
`;
const SnackbarContent = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

export const Snackbar = styled(UnstyledSnackbar)`
  display: flex;
  align-items: center;
  background-color: ${({ severity }) => SNACKBAR_SEVERITY[severity].background};
  color: ${({ severity }) => SNACKBAR_SEVERITY[severity].font};
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
`;

type SnackbarIconProps = {
  className?: string;
  severity: SnackbarSeverity;
};

const UnstyledSnackbarIcon = ({ className, severity }: SnackbarIconProps) => {
  switch (severity) {
    case 'info':
    case 'success':
      return <InfoIcon className={className} />;

    case 'warning':
    case 'error':
      return <WarningIcon className={className} />;
    default:
      return null;
  }
};

export const SnackbarIcon = styled(UnstyledSnackbarIcon)`
  fill: ${({ severity }) => SNACKBAR_SEVERITY[severity].font};
  width: 12px;
  height: 12px;
`;
