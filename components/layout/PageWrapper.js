import React from 'react';
import Appbar from './Appbar';
import { Box, Container } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Appbar />
      <Box
        component="main"
        sx={{
          backgroundColor: 'primary.light',
          minHeight: '90vh',
        }}
      >
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </>
  );
};

export default PageWrapper;
