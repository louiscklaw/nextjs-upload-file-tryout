import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default ({ dir_prefix }) => {
  const { t } = useTranslation();

  const router = useRouter();
  const { locale } = router.query;

  return (
    <>
      <Stack direction="row" justifyContent={'center'}>
        <QRCodeSVG
          value={`${window.location.origin}/${locale}/get_files/${dir_prefix}`}
          width={'100'}
          height={'100'}
          fgColor={'rgb(65, 66, 68)'}
        />
      </Stack>
    </>
  );
};
