import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { CardBox } from '../styled/MarginBox';

const HeadAndCard = ({ headText = 'Details', icon, children }) => {
  return (
    <CardBox>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Image src={icon} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: '600',
            px: 1,
          }}
        >
          {headText}
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottom: '1px solid black',
          my: 1,
        }}
      />

      {children}
    </CardBox>
  );
};

export default HeadAndCard;