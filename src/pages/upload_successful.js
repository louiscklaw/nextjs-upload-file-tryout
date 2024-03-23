import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import SelectFileToUpload from 'components/SelectFileToUpload';
import { Box, Stack, Typography } from '@mui/material';
import UploadSuccessfulBody from 'components/UploadSuccessfulBody';

export default function UploadSuccessful() {
  return (
    <>
      <Head>
        <title>Upload done</title>
      </Head>

      <Box height={'10vh'}></Box>

      <Stack minHeight={'80vh'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <UploadSuccessfulBody />
      </Stack>

      <footer>
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ minHeight: 'calc( 100vh - 10vh - 80vh )' }}
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
      </footer>
    </>
  );
}
