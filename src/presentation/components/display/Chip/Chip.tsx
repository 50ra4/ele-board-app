import styled, { css } from 'styled-components';
import { ColorPalette } from 'src/presentation/styles/theme';

type ChipStyleProps = {
  color: ColorPalette;
  disabled?: boolean;
  variant?: 'outlined' | 'contained';
};

export const Chip = styled.li<ChipStyleProps>`
  color: ${({ theme, color }) => theme.color[color].font};
  font-size: 14px;
  background-color: ${({ theme, color }) => theme.color[color].background};
  border: 1px solid ${({ theme, color }) => theme.color[color].background};
  border-radius: 33px;
  display: inline-block;
  padding: 8px 16px;

  ${({ variant, disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) =>
        theme.color['default'][variant === 'outlined' ? 'background' : 'font']};
      background-color: ${({ theme }) =>
        variant === 'outlined' ? 'inherit' : theme.color['default'].background};
      border: 1px solid ${({ theme }) => theme.color['default'].background};
    `}

  ${({ variant, color }) =>
    variant === 'outlined' &&
    css`
      color: ${({ theme }) => theme.color[color].background};
      background-color: inherit;
    `}
`;

export const ChipList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${Chip} {
    margin: 0 8px 8px 0;
  }
`;
