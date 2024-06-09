import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import SelectFileToUpload from '../../components/SelectFileToUpload';
import { Box, Stack, Typography } from '@mui/material';

import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import dynamic from 'next/dynamic';

const UploadSuccessfulBody = dynamic(() => import('../../components/UploadSuccessfulBody'), { ssr: false });

import { useEffect } from 'react';

export default function UploadSuccessful() {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <>
      <Head>
        <title>{t('Upload done')}</title>``
      </Head>

      <Stack
        minHeight={'90vh'}
        width={'calc( 100vw - 20px )'}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <UploadSuccessfulBody />
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
}

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };
