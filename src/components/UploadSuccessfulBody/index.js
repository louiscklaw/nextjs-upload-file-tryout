import { Box, Button, Card, CardContent, Divider, IconButton, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import HelloworldSvg from './HelloWorld.svg';
import Image from 'next/image';
import CarousellLogoPng from './CarousellLogo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';

export default function UploadSuccessfulBody() {
  const { t } = useTranslation();
  const router = useRouter();
  const [dir_prefix, setDirPrefix] = useState('');

  const showTextCopyDone = () =>
    toast(
      t => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <Box>{'👍 copied !!'}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(t.id)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      {
        duration: 15 * 1000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },
    );

  const showLinkCopyDone = () =>
    toast(
      t => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <CheckCircleIcon sx={{ height: '2rem', width: '2rem', color: '#27ae60' }} />
          <Box>{'Link copied !!'}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(t.id)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      {
        duration: 15 * 1000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },
    );

  const showCarousellLinkCopyDone = () =>
    toast(
      t => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <CheckCircleIcon sx={{ height: '2rem', width: '2rem', color: '#27ae60' }} />
          <Box>{'Carousell Link copied !!'}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(t.id)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      {
        duration: 15 * 1000,
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
      router.replace('/');
    }
  });

  if (typeof window !== 'object') return <></>;

  return (
    <>
      <Toaster />
      <Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack direction={['column']} alignItems={'center'} spacing={'1rem'} margin={'1rem'} padding={'1rem'}>
              <Typography variant="h5" gutterBottom>
                Upload successful !
              </Typography>

              <QRCodeSVG
                value={`${window.location.origin}/upload/`}
                width={'150'}
                height={'150'}
                fgColor={'rgb(65, 66, 68)'}
              />

              <Box pt={'1rem'}></Box>

              <Typography>send letters below back to louis 🙇‍♂️🙇‍♂️</Typography>

              <Stack
                direction="row"
                justifyContent={'center'}
                spacing={'0.5rem'}
                paddingX={'1rem'}
                paddingY={'0.5rem'}
                sx={{ backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '1rem', cursor: 'pointer' }}
              >
                <CopyToClipboard text={dir_prefix} onCopy={() => showTextCopyDone()}>
                  <Typography variant={'h3'} sx={{ fontFamily: '"Space Mono", monospace;' }}>
                    {dir_prefix}
                  </Typography>
                </CopyToClipboard>
              </Stack>

              <Typography my="0.5rem" variant="h6">
                you may want to:
              </Typography>

              <Stack direction={'column'} spacing={'0.5rem'}>
                <Link href="/" replace>
                  <Button size="large" variant={'contained'}>
                    <Stack direction={'row'} width="100%" spacing={'1rem'}>
                      <ArrowBackIcon />
                      <Box flexGrow={1}> Back</Box>
                    </Stack>
                  </Button>
                </Link>

                <CopyToClipboard
                  text={`${window.location.origin}/get_files?dir_prefix=${dir_prefix}`}
                  onCopy={() => showLinkCopyDone()}
                >
                  <Button size="large" variant={'contained'}>
                    <Stack direction={'row'} width="100%" spacing={'1rem'}>
                      <ShareIcon />
                      <Box flexGrow={1}>Copy share Link</Box>
                    </Stack>
                  </Button>
                </CopyToClipboard>

                <CopyToClipboard
                  text={`ttps://${window.location.host}/get_files?dir_prefix=${dir_prefix}`}
                  onCopy={() => showCarousellLinkCopyDone()}
                >
                  <Button size="large" variant={'contained'} sx={{ backgroundColor: 'rgb(204, 30, 43)' }}>
                    <Stack direction={'row'} width="100%" spacing={'1rem'}>
                      <Image src={CarousellLogoPng.src} width="30px" height="30px" />
                      <Box flexGrow={1}>Copy carousell link</Box>
                    </Stack>
                  </Button>
                </CopyToClipboard>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
