import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import SelectFileToUpload from 'components/SelectFileToUpload';
import { Box, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upload - louislabs.com</title>
        <meta name="description" content="file upload service for louislabs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box height={'10vh'}></Box>

      <Stack minHeight={'80vh'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <SelectFileToUpload />
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
