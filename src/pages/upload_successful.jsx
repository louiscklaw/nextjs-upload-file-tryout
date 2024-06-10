import Head from 'next/head';
import Image from 'next/image';
import { useTheme } from '@emotion/react';

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Box, Stack, Typography } from '@mui/material';
import UploadSuccessfulBody from 'components/UploadSuccessfulBody';
import { useEffect } from 'react';

const PageContent = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{t('Upload done')}</title>``
      </Head>

      <Stack
        minHeight={['90vh', '90vh']}
        width={['100vw', 'calc( 100vw - 20px )']}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor="unset"
      >
        <UploadSuccessfulBody />
      </Stack>

      <Box height={['10vh', '10vh']} width={['100vw', 'calc( 100vw - 20px )']} backgroundColor="unset">
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

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default PageContent;
