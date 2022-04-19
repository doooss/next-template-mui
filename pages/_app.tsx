import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '/styles/global.css';
import { theme } from '../styles/theme';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) return null;

  if (window === undefined) return <></>;

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
