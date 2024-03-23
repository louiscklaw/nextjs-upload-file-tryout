import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import SorryIconSvg from '../images/sorry-icon.svg';

export default function CheckFilesError() {
  return (
    <>
      <Stack direction="column" height={'90vh'} justifyContent={'center'} alignItems={'center'}>
        <Card sx={{ width: '500px', padding: '1rem' }}>
          <CardContent>
            <Stack direction="column" alignItems={'center'} spacing="2rem">
              <Image src={SorryIconSvg.src} width="300px" height="300px" />

              <Box>
                <Typography variant="h5">Sorry but error during getting file</Typography>
              </Box>
              <Link href="/">
                <Button size="large" variant="contained">
                  Back
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}
