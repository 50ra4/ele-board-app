import { AppProps } from 'next/app';

import { AppThemeProvider } from 'src/presentation/styles/AppThemeProvider';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}

export default MyApp;
