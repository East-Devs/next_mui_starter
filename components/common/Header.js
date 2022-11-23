import { Box } from '@mui/material';
import React from 'react';
import Wallet from './Buttons/Wallet';
import SearchWrapper from './Search';

const Header = ({ sx }) => {
  return (
    <Box
      sx={{
        gridArea: 'header',
        display: { md: 'grid' },
        gridTemplateAreas: '"space search walletBtn"',
        gridTemplateColumns: '1fr 3fr 1fr',
        py: 1,
        gap: 3,
      }}
    >
      <Box sx={{ gridArea: 'search' }}>
        <SearchWrapper />
      </Box>
      <Wallet
        sxBox={{
          gridArea: 'walletBtn',
        }}
      />
    </Box>
  );
};

export default Header;
