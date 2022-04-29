import { createGlobalStyle, css } from 'styled-components';
import { StyledComponentsTheme } from './theme';

const customCss = (theme: StyledComponentsTheme) => css`
  li {
    list-style: none;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  * {
    font-family: ${theme.font.family};
  }

  body {
    line-height: 1;
    color: ${theme.color.default.font};
    background-color: ${theme.color.default.background};
  }

  p {
    word-break: break-all;
    white-space: pre-line;
  }

  button,
  input {
    padding: 0;
    margin: 0;
    appearance: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  select {
    appearance: none;
    &:-ms-expand {
      display: none;
    }
  }

  button,
  input,
  textarea,
  a,
  select {
    ${theme.focusOutline(theme.color.input.focused.outline)}
  }
`;

export const GlobalStyle = createGlobalStyle<{ theme: StyledComponentsTheme }>`
  ${({ theme }) => customCss(theme)}
`;
