import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import 'modern-css-reset/dist/reset.min.css';

import { GlobalStyle } from './global';
import { STYLE_THEME } from './theme';

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={STYLE_THEME}>
      <GlobalStyle theme={STYLE_THEME} />
      {children}
    </ThemeProvider>
  );
}
