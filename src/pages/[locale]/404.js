import { useTranslation } from 'next-i18next';
import { Box, Button, Stack, Typography } from '@mui/material';

import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import Link from '../../components/Link';

const Homepage = () => {
  const { t } = useTranslation(['404', 'common', 'footer']);

  return (
    <>
      <Stack direction="column" width={'calc( 100vw - 20px )'} height={'95vh'} justifyContent={'center'}>
        <Stack gap={'3rem'}>
          <Typography variant="h1" fontSize={'2rem'}>
            {t('sorry some error occurred')}
          </Typography>

          <Link href="/">
            <Button variant="contained">{t('Back')}</Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(['404', 'common', 'footer']);
export { getStaticPaths, getStaticProps };
