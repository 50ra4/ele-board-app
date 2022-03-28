import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'modern-css-reset/dist/reset.min.css';

import { GlobalStyle } from 'src/presentation/styles/global';
import { StyledTheme } from 'src/presentation/styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={StyledTheme}>
      <GlobalStyle theme={StyledTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
