import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardBox } from '../../styled/MarginBox';
import avatar from '/public/nft/avatar.png';

const NftTitle = ({ sx }) => {
  const { selectedToken, selectedContract } = useSelector(
    (state) => state.tokens
  );
  return (
    <Box sx={{ gridArea: 'nftTitle' }}>
      <CardBox>
        <Typography
          variant="h4"
          sx={{
            fontWeight: '700',
            pb: 1,
          }}
        >
          {`${selectedContract?.name} #${selectedToken?.identifier}`}
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
            {selectedToken?.info?.name}
          </Typography>
        </Box>
      </CardBox>
    </Box>
  );
};

export default NftTitle;
