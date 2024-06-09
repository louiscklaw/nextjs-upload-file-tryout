import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useTranslation } from 'next-i18next';

export default () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { dir_prefix } = router.query;
  const [disable_download_button, setDisableDownloadButton] = useState(true);
  const [download, setDownload] = useState(t('Preparing ...'));

  const goDownload = () => {
    setDisableDownloadButton(true);
    setDownload(t('preparing ... '));

    router.push(`${window.location.origin}/api/files/get?dir_prefix=${dir_prefix}`);
    setDownload(t('start download ... '));
  };

  useEffect(() => {
    if (dir_prefix != undefined) {
      fetch(`${window.location.origin}/api/files/check?dir_prefix=${dir_prefix}`)
        .then(res => res.json())
        .then(res_json => {
          console.log(res_json);
          if (res_json['status'] == 'error') {
            router.replace('/get_files_error');
          }

          if (res_json['status'] == 'OK') {
            setDisableDownloadButton(false);
            setDownload(t('download'));
          }
        })
        .catch(err => {
          console.log(err);
          router.replace('/get_files_error');
        });
    }
  }, [dir_prefix]);

  if (typeof window !== 'object') return <>{t('loading')}</>;

  return (
    <>
      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} minHeight={'90vh'}>
        <Card sx={{ width: ['95vw', 'unset'], minWidth: 275, height: ['80vh', 'unset'] }}>
          <CardContent>
            <Stack direction="column" spacing={'2rem'} alignItems={'center'} sx={{ padding: ['0', '3rem'] }}>
              <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
                <Stack direction={'row'} justifyContent={'center'}>
                  <CloudDownloadIcon sx={{ fontSize: ['2rem', '5rem'] }} />
                </Stack>
                <Stack direction="row" justifyContent={'center'}>
                  <Typography sx={{ fontSize: ['2rem', '3rem'] }}>{t('Get files')}</Typography>
                </Stack>
              </Stack>

              <Box flexGrow={1}></Box>

              <Stack direction="row" justifyContent={'center'}>
                <Typography variant={['caption', 'text']}>{t('to download using mobile, scan below:')}</Typography>
              </Stack>

              <Stack direction="row" justifyContent={'center'}>
                <QRCodeSVG
                  value={`${window.location.origin}/get_files?dir_prefix=${dir_prefix}`}
                  width={'150'}
                  height={'150'}
                  fgColor={'rgb(65, 66, 68)'}
                />
              </Stack>

              <Box flexGrow={1}></Box>

              <Box
                width="100%"
                minHeight="100px"
                sx={{
                  display: 'flex',
                  flexDirection: ['row', 'column'],
                  gap: '1rem',
                }}
              >
                <Box sx={{ width: ['50%', '100%'] }}>
                  <Box
                    sx={{
                      margin: '1rem',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Link href="/">
                      <Button variant="outlined" sx={{ height: '100%', width: '90%' }} size={'large'}>
                        <Stack direction={['column', 'row']} spacing={'1rem'} alignItems={'center'}>
                          <ChevronLeftIcon />
                          {t('Back')}
                        </Stack>
                      </Button>
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ width: ['50%', '100%'] }}>
                  <Box
                    sx={{
                      margin: '1rem',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={goDownload}
                      disabled={disable_download_button}
                      sx={{ height: '100%', width: '90%' }}
                      size={'large'}
                    >
                      <Stack
                        direction={['column', 'row']}
                        spacing={'1rem'}
                        alignItems={'center'}
                        style={{ textTransform: 'capitalize' }}
                      >
                        <FileDownloadIcon />
                        {download}
                      </Stack>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
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
};
