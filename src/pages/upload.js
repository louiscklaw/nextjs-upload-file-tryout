import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Upload() {
  const router = useRouter();

  useEffect(() => {
    // check for some condition here
    router.replace('/');
  }, []);

  return (
    <>
      <Stack direction={'row'} height="90vh" justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Typography variant="h6">Redirecting to new upload page</Typography>
          <Typography variant="h6">Please click below if it doesn&apos;t...</Typography>
          <Box sx={{ padding: '3rem' }}>
            <Link href="/" replace={true}>
              <Typography variant="h6" textAlign={'center'} sx={{ textDecoration: 'underline', color: 'blue' }}>
                go to new page
              </Typography>
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
