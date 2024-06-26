import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'next/head';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SelectFileToUpload from 'components/SelectFileToUpload';

import { setup } from '../lib/csrf';
import { useEffect } from 'react';

const Homepage = _props => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('i18nextLng', router.locale);

    fetch(`/api/xsrf_check`)
      .then(res => res.json())
      .then(res_json => {
        let { result } = res_json;
        if (result == 'xsrf exist') {
          console.log('token found');
        } else {
          router.replace(`/Init`);
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

      <Stack paddingTop={'1rem'} direction={'row'} gap={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <Link href={'/'} locale={'en'} style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
          <Typography variant={'h4'} fontSize={'1rem'} color={theme.palette.primary.main}>
            {t('en')}
          </Typography>
        </Link>
        /
        <Link href={'/'} locale={'zh-HK'} style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
          <Typography variant={'h4'} fontSize={'1rem'} color={theme.palette.primary.main}>
            {t('zh-HK')}
          </Typography>
        </Link>
        /
        <Link href={'/'} locale={'zh-CN'} style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
          <Typography variant={'h4'} fontSize={'1rem'} color={theme.palette.primary.main}>
            {t('zh-CN')}
          </Typography>
        </Link>
      </Stack>

      <Stack minHeight={'80vh'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <SelectFileToUpload />
      </Stack>

      <Box height={'10vh'} width={'calc( 100vw - 20px )'}>
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ minHeight: ['none', 'calc( 100vh  - 90vh )'] }}
        >
          <Stack direction={'row'} justifyContent={'center'}>
            <Typography variant="caption" gutterBottom>
              2024 louislabs.com
            </Typography>
          </Stack>

          <Stack direction={'row'} justifyContent={'center'} spacing={'1rem'}>
            <Stack direction={'row'} justifyContent={'center'}>
              <Link
                href="https://louiscklaw-github-io.sentry.io/issues/?project=4507283217514496"
                style={{ fontSize: '0.7rem', textDecoration: 'underline', color: theme.palette.primary.main }}
              >
                sentry
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default Homepage;
