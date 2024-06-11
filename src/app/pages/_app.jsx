import { appWithTranslation } from 'next-i18next';
// import nextI18NextConfig from '../next-i18next.config.js'
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from 'styles/theme/lightTheme';

const clientSideEmotionCache = createEmotionCache();

// const MyApp = props => {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

//   return (
//     <>
//       <CacheProvider value={emotionCache}>
//         <ThemeProvider theme={lightTheme}>
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </CacheProvider>
//     </>
//   );
// };
const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */);
