import React from 'react';
import styled from 'styled-components';

type OwnProps = {
  className?: string;
  transparent?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type BackdropProps = OwnProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof OwnProps>;

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  { onClick, children, transparent, className, ...props },
  ref,
) {
  return (
    <BackdropWrap
      {...props}
      className={className}
      transparent={transparent}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {children}
    </BackdropWrap>
  );
});

export const BackdropWrap = styled.div<{ transparent?: boolean }>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${({ transparent }) => (!transparent ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  -webkit-tap-highlight-color: transparent;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;
