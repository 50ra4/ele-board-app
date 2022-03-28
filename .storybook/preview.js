import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { StyledTheme } from '../src/presentation/styles/theme';
import { GlobalStyle } from '../src/presentation/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={StyledTheme}>
      <GlobalStyle theme={StyledTheme} />
      <Story {...context} />
    </ThemeProvider>
  );
};

addDecorator(withThemeProvider);
