import { addDecorator } from '@storybook/react';
import { AppThemeProvider } from '../src/presentation/styles/AppThemeProvider';

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
    <AppThemeProvider>
      <Story {...context} />
    </AppThemeProvider>
  );
};

addDecorator(withThemeProvider);
