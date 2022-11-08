import { Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import walletWhite from '/public/icons/walletWhite.png';

const Wallet = ({ sxBtn = {}, sxBox = {}, textBtn = 'Connect Wallet' }) => {
  return (
    <Button
      variant="contained"
      sx={{
        ...sxBox,
        borderRadius: '60px',
        mt: { xs: 2, md: 0 },
        ml: 'auto',
        height: '50px',
      }}
    >
      {textBtn}
      <Box sx={{ ml: 1, ...sxBtn }}>
        <Image src={walletWhite} twitter="walletWhite" />
      </Box>
    </Button>
  );
};

export default Wallet;
