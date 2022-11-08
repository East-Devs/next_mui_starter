import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { CardBox } from '../../styled/MarginBox';
import avatar from '/public/nft/avatar.png';
const NftTitle = ({ sx }) => {
  return (
    <Box sx={{ gridArea: 'nftTitle' }}>
      <CardBox>
        <Typography
          variant="h2"
          sx={{
            fontWeight: '700',
            pb: 1,
          }}
        >
          Doodle#6065
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Image src={avatar} alt="avatar" />
          <Typography
            variant="h5"
            sx={{
              fontWeight: '600',
              px: 1,
            }}
          >
            Doodle#6065
          </Typography>
        </Box>
      </CardBox>
    </Box>
  );
};

export default NftTitle;
