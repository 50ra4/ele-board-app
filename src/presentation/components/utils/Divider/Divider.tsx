import styled from 'styled-components';

export const Divider = styled.hr`
  height: 1px;
  margin: 4px 0;
  background-color: ${({ theme }) => theme.color.border.light};
`;
