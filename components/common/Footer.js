import { Box, Typography } from '@mui/material';
import React from 'react';
import Wallet from './Buttons/Wallet';
import Icons from './Icons';

const Footer = ({ sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        my: 3,
      }}
    >
      <Typography variant="body1" sx={{ color: 'white', fontWeight: '600' }}>
        Lorem Lipsum © 2022
      </Typography>
      <Icons />
    </Box>
  );
};

export default Footer;
