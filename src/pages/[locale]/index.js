import React, { useEffect } from 'react';
import Head from 'next/head';
import SelectFileToUpload from '../../components/SelectFileToUpload';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import { useTheme } from '@emotion/react';

// handled lang options link
import Link from 'next/link';

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer']);
  const theme = useTheme();

  const router = useRouter();
  const { locale } = router.query;

  useEffect(() => {
    localStorage.setItem('i18nextLng', locale);

    fetch(`${window.location.origin}/api/xsrf_check`)
      .then(res => res.json())
      .then(res_json => {
        let { result } = res_json;
        if (result != 'xsrf exist') {
          router.replace(`${window.location.origin}/`);
        }
      });
  }, []);

  return (
    <>
      <Head>
        <title>Upload - louislabs.com</title>
        <meta name="description" content="file upload service for louislabs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box height={'10vh'}>
        <Stack direction={'row'} justifyContent={'flex-end'} paddingTop={'1rem'} paddingRight={'1rem'} gap={'1rem'}>
          <Link href="/en" style={{ textDecoration: 'none' }}>
            <Typography variant="h3" fontSize="1rem" style={{ color: theme.palette.primary.main }}>
              {t('en')}
            </Typography>
          </Link>
          <Link href="/zh-HK" style={{ textDecoration: 'none' }}>
            <Typography variant="h3" fontSize="1rem" style={{ color: theme.palette.primary.main }}>
              {t('zh_HK')}
            </Typography>
          </Link>
          <Link href="/zh-CN" style={{ textDecoration: 'none' }}>
            <Typography variant="h3" fontSize="1rem" style={{ color: theme.palette.primary.main }}>
              {t('zh_CN')}
            </Typography>
          </Link>
        </Stack>
      </Box>

      <Stack minHeight={'80vh'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <SelectFileToUpload />
      </Stack>

      <Box height={'10vh'} width={'calc( 100vw - 20px )'}>
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            minHeight: ['none', 'calc( 100vh  - 90vh )'],
          }}
        >
          <Stack direction={'row'} justifyContent={'center'}>
            <Typography variant="caption" gutterBottom>
              2024 louislabs.com
            </Typography>
          </Stack>

          <Stack direction={'row'} justifyContent={'center'} spacing={'1rem'}>
            <Stack direction={'row'} justifyContent={'center'}>
              <Typography variant="caption" gutterBottom>
                logrocket
              </Typography>
            </Stack>

            <Stack direction={'row'} justifyContent={'center'}>
              <Typography variant="caption" gutterBottom>
                sentry
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };
