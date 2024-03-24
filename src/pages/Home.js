import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import SelectFileToUpload from 'components/SelectFileToUpload';
import { Box, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

  return (
    <>
      <Head>
        <title>Upload - louislabs.com</title>
        <meta name="description" content="file upload service for louislabs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box height={'10vh'}>
        <Stack direction={'row'} justifyContent={'flex-end'} paddingTop={'1rem'} paddingRight={'1rem'}>
          <IconButton aria-label="delete" onClick={handleClick}>
            <TranslateIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={changeToEnglish}>{t('english')}</MenuItem>
            <MenuItem onClick={changeToZhHk}>{t('zh_hk')}</MenuItem>
          </Menu>
        </Stack>
      </Box>
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
