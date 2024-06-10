import { Box, Stack } from '@mui/material';
import { setup } from 'lib/csrf';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export default () => {
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    router.replace(`/${router.locale}/`);
  }, []);

  return (
    <>
      <Stack height={'100vh'} width={'calc( 100vw - 20px)'} direction={'column'} justifyContent={'center'}>
        {t('loading')}...
      </Stack>
    </>
  );
};

export const getServerSideProps = setup(async ({ req, res }) => {
  return {
    props: {},
  };
});
