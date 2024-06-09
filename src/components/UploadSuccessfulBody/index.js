import { Box, Button, Card, CardContent, Divider, IconButton, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import Link from 'next/link';
import Link from '../../components/Link';

import HelloworldSvg from './HelloWorld.svg';
import Image from 'next/image';
import CarousellLogoPng from './CarousellLogo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';

export default function UploadSuccessfulBody() {
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();

  const { locale } = router.query;
  const [dir_prefix, setDirPrefix] = useState('');

  const showTextCopyDone = () =>
    toast(
      toast_body => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <Box>{t('👍 copied !!')}</Box>
          <Box>
            <IconButton
              onClick={() => {
                if (toast_body?.dismiss) {
                  toast_body.dismiss(toast_body.id);
                }
              }}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      {
        duration: 5 * 1000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },
    );

  const showLinkCopyDone = () =>
    toast(
      toast_body => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <CheckCircleIcon sx={{ height: '2rem', width: '2rem', color: '#27ae60' }} />
          <Box>{t('share Link copied !!')}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(toast_body.id)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      {
        duration: 5 * 1000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },
    );

  const showCarousellLinkCopyDone = () =>
    toast(
      toast_body => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <CheckCircleIcon sx={{ height: '2rem', width: '2rem', color: '#27ae60' }} />
          <Box>{t('Carousell Link copied !!')}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(toast_body.id)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      {
        duration: 5 * 1000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },
    );

  useEffect(() => {
    let temp = localStorage.getItem('dir_prefix');
    if (temp) {
      setDirPrefix(temp);
    } else {
      // TODO: resume me
      // router.replace('/');
    }
  }, []);

  if (typeof window !== 'object') return <>loading</>;

  return (
    <>
      <Toaster />
      <Card sx={{ width: ['95vw', 'unset'], minWidth: 275, height: ['80vh', 'unset'] }}>
        <CardContent sx={{ backgroundColor: 'unset' }}>
          <Stack
            direction={['column']}
            alignItems={'center'}
            spacing={'1rem'}
            margin={['0', '1rem']}
            padding={['0', '1rem']}
          >
            <Typography sx={{ fontSize: ['2rem', '2rem'] }}>{t('Upload success')} !</Typography>
            <Box width={['100px', '150px']}>
              <QRCodeSVG
                value={`${window.location.origin}/${locale}/get_files/${dir_prefix}`}
                width={'100%'}
                height={'100%'}
                fgColor={'rgb(65, 66, 68)'}
              />
            </Box>
            <Box display={['none', 'unset']} pt={['0', '1rem']}></Box>
            <Typography sx={{ fontSize: ['1rem', '1rem'], wordBreak: 'break-all' }}>
              {t('send_share_code')} 🙇‍♂️🙇‍♂️
            </Typography>
            <Typography sx={{ fontSize: ['1rem', '1rem'], wordBreak: 'break-all' }}>{t('thanks')}</Typography>

            <Typography
              sx={{
                fontSize: ['0.8rem'],
                wordBreak: 'break-all',
              }}
            >
              ({t('click to copy')})
            </Typography>

            <Stack
              direction="row"
              justifyContent={'center'}
              spacing={'0.5rem'}
              paddingX={'1rem'}
              paddingY={'0.5rem'}
              sx={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                ':hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                },
                borderRadius: '1rem',
                cursor: 'pointer',
              }}
            >
              <CopyToClipboard text={dir_prefix} onCopy={() => showTextCopyDone()}>
                <Typography variant={'h3'} sx={{ fontFamily: '"Space Mono", monospace;' }}>
                  {dir_prefix}
                </Typography>
              </CopyToClipboard>
            </Stack>

            <Box
              sx={{
                marginTop: '0.2rem',
                paddingTop: '0.2rem',
                borderTop: '1px solid rgba(0,0,0,0.2)',
                width: '100%',
              }}
            ></Box>

            <Typography my="0.5rem" variant={['caption', 'h6']}>
              {t('you may want to')}:
            </Typography>
            <Stack direction={'column'} spacing={'0.5rem'}>
              <Button size="large" variant={'contained'} href={`/${locale}`}>
                <Stack direction={'row'} width="100%" spacing={'1rem'}>
                  <ArrowBackIcon />
                  <Box flexGrow={1}>{t('Back')}</Box>
                </Stack>
              </Button>

              <CopyToClipboard
                text={`${window.location.origin}/${locale}/get_files/${dir_prefix}`}
                onCopy={() => showLinkCopyDone()}
              >
                <Button size="large" variant={'contained'}>
                  <Stack direction={'row'} width="100%" spacing={'1rem'}>
                    <ShareIcon />
                    <Box flexGrow={1}>{t('Copy share Link')}</Box>
                  </Stack>
                </Button>
              </CopyToClipboard>

              <CopyToClipboard
                text={`ttps://${window.location.host}/${locale}/get_files/${dir_prefix}`}
                onCopy={() => showCarousellLinkCopyDone()}
              >
                <Button
                  size="large"
                  variant={'contained'}
                  sx={{
                    backgroundColor: theme.palette.carousell.main,
                    ':hover': {
                      bgcolor: theme.palette.carousell.hover,
                    },
                  }}
                >
                  <Stack direction={'row'} width="100%" spacing={'1rem'}>
                    <Image src={CarousellLogoPng.src} width="30" height="30" />
                    <Box flexGrow={1}>{t('Copy carousell link')}</Box>
                  </Stack>
                </Button>
              </CopyToClipboard>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
