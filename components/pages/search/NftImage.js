import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import ImageFallback from '../../common/FallbackImage';

const NftImage = ({ sx }) => {
  const { selectedToken } = useSelector((state) => state.tokens);
  return (
    <Box
      sx={{
        ...sx,
        position: 'relative',
        '& > span': {
          borderRadius: '20px',
        },
      }}
    >
      <ImageFallback src={selectedToken?.info?.image} layout="fill" />
    </Box>
  );
};

export default NftImage;
