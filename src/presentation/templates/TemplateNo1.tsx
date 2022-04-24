import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const TemplateNo1 = ({ children }: Props) => {
  return (
    <Root>
      <Content>{children}</Content>
    </Root>
  );
};

const Root = styled.div``;
const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
