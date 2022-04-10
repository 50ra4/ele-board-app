import React from 'react';
import styled from 'styled-components';

type OwnProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type BackdropProps = OwnProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof OwnProps>;

const UnstyledBackdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  { onClick, children, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {children}
    </div>
  );
});

export const Backdrop = styled(UnstyledBackdrop)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;
