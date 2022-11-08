import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import nft from '/public/nft/nft.png';

const NftImage = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Image src={nft} />
    </Box>
  );
};

export default NftImage;
