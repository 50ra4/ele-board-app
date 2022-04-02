import React from 'react';
import { Backdrop, BackdropProps } from '../Backdrop/Backdrop';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export type LoadingGuardProps = Omit<BackdropProps, 'children'>;

export const LoadingGuard = React.memo(function LoadingGuard(props: LoadingGuardProps) {
  return (
    <Backdrop {...props}>
      <LoadingSpinner size="extraLarge" />
    </Backdrop>
  );
});
