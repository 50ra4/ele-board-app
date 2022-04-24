import styled from 'styled-components';

export const OutlineDescription = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.border.dark};
  border-radius: 4px;
  padding: 16px 24px;
`;
