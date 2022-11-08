import { Box, Typography } from '@mui/material';
import React from 'react';
import Wallet from './Buttons/Wallet';
import Icons from './Icons';

const Footer = ({ sx }) => {
  return (
    <Box
      sx={{
        gridArea: 'footer',
        display: 'flex',
        justifyContent: 'space-between',
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
