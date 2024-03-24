import React from 'react';
import EmojiU1f30bSvg from '../images/Emoji_u1f30b.svg';
import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default () => {
  return (
    <>
      <Box width="100vw" height="90vh">
        <Stack height="100%" direction="column" justifyContent={'center'} alignItems={'center'} spacing="3rem">
          <Typography variant="h4">sky falling,</Typography>
          <Typography variant="h4">some error occured</Typography>
          <Box>
            <Image src={EmojiU1f30bSvg.src} width="100px" height="100px" />
          </Box>

          <Link href="/">
            <Button variant="contained" size="large">
              <Typography variant="h5">Back</Typography>
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};
