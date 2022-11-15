import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import nft from '/public/nft/nft.png';

const NftImage = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Link href="/collections">
        <Image src={nft} alt="nft" />
      </Link>
    </Box>
  );
};

export default NftImage;
