import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../lib/getStatic';

export default () => {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation(['common', 'footer']);

  return (
    <>
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
    </>
  );
};

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };
