import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

export default function GetFiles() {
  const router = useRouter();
  const { dir_prefix } = router.query;
  const [disable_download_button, setDisableDownloadButton] = useState(true);
  const [download, setDownload] = useState('Preparing ...');

  const goDownload = () => {
    setDisableDownloadButton(true);
    setDownload('downloading ... ');

    router.push(`/api/files/get?dir_prefix=${dir_prefix}`);
  };

  useEffect(() => {
    if (dir_prefix != undefined) {
      fetch(`/api/files/check?dir_prefix=${dir_prefix}`)
        .then(res => res.json())
        .then(res_json => {
          console.log(res_json);
          if (res_json['status'] == 'error') {
            router.replace('/get_files_error');
          }

          if (res_json['status'] == 'OK') {
            setDisableDownloadButton(false);
            setDownload('Download');
          }
        })
        .catch(err => {
          console.log(err);
          router.replace('/get_files_error');
        });
    }
  }, [dir_prefix]);

  return (
    <>
      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} minHeight={'90vh'}>
        <Card sx={{ width: '300px' }}>
          <CardContent>
            <Stack direction="column" spacing={'2rem'} alignItems={'center'}>
              <Stack direction={'row'} justifyContent={'center'}>
                <CloudDownloadIcon sx={{ fontSize: '5rem' }} />
              </Stack>

              <Stack direction="row" justifyContent={'center'}>
                <Typography variant="h4">Get files</Typography>
              </Stack>

              <Stack direction="row" justifyContent={'center'}>
                <Typography variant="text">to download using mobile</Typography>
              </Stack>

              <Stack direction="row" justifyContent={'center'}>
                <QRCodeSVG
                  value="https://aboutme.louislabs.com/upload/"
                  width={'150'}
                  height={'150'}
                  fgColor={'rgb(65, 66, 68)'}
                />
              </Stack>

              <Divider />

              <Button variant="contained" fullWidth onClick={goDownload} disabled={disable_download_button}>
                {download}
              </Button>

              <Link href="/">
                <Button variant="outlined" fullWidth>
                  {'Back'}
                </Button>
              </Link>
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
}
