import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { useSelector, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper, store, persistor } from '../store/store';
import createEmotionCache from '../utility/createEmotionCache';
import { lightTheme, darkTheme } from '../styles/theme/theme';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = useSelector((state) => state.tokens.theme);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Milonis</title>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider theme={false ? darkTheme : lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          <ToastContainer autoClose={2000} />
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
