import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SelectFileToUpload from '../../components/SelectFileToUpload';
import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import { useTheme } from '@emotion/react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// handled lang options link
import Link from 'next/link';

const Homepage = () => {
  const router = useRouter();
  const { t } = useTranslation(['common', 'footer']);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeToEnglish = () => {
    localStorage.setItem('i18nextLng', 'en');
    handleClose();
    router.reload();
  };

  const changeToZhHk = () => {
    localStorage.setItem('i18nextLng', 'zh_hk');
    handleClose();
    router.reload();
  };
  const changeToZhCn = () => {
    localStorage.setItem('i18nextLng', 'zh_cn');
    handleClose();
    router.reload();
  };

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
