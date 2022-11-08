import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import background from '/public/background/bg.png';

const PageWrapper = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        height: 'auto',
        display: 'flex',
      }}
    >
      {children}
      <Image src={background} layout="fill" objectFit="cover" />
    </Box>
  );
};

export default PageWrapper;
