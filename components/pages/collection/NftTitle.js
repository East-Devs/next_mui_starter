import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import nft from '/public/nft/nft.png';

export const NftTitle = () => {
  const { collection } = useSelector((state) => state.tokens);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        my: 4,
        gridArea: 'nftTitle',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '88px',
          height: '88px',
        }}
      >
        <Image src={nft} />
      </Box>
      <Box
        sx={{
          ml: 1,
        }}
      >
        <Typography
          component="h5"
          sx={{
            fontWeight: '700',
          }}
        >
          TOKEN
        </Typography>
        <Typography component="body1">{collection?.[0][0].name}</Typography>
      </Box>
    </Box>
  );
};
