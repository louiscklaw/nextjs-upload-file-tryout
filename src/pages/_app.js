import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

import '../i18n';

import LogRocket from 'logrocket';

const clientSideEmotionCache = createEmotionCache();

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(()=>{
    LogRocket.init('share-louislabs-com/share-louislabs-com');
    console.log('logrocket init done');
  },[])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
