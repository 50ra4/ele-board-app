import React from 'react';
import { render } from '@testing-library/react';
import { AppThemeProvider } from 'src/presentation/styles/AppThemeProvider';

export function renderWithStyle(...params: Parameters<typeof render>) {
  const [ui, ...args] = params;
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, ...args);
}
