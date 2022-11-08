import { Box, Typography } from '@mui/material';
import React from 'react';
import { CardBox } from '../../styled/MarginBox';

const detailsObj = [
  {
    name: 'Min. Price',
    eth: '3.4 Eth',
    usd: '$8,318.24',
  },
  {
    name: 'Last Sale (Item)',
    eth: '14.3 Eth',
    usd: '$8,318.24',
  },
  {
    name: 'Last Sale (Contract)',
    eth: '6.4 Eth',
    usd: '$8,318.24',
  },
];

const NftPrice = ({ sx }) => {
  return (
    <Box sx={{ gridArea: 'nftPrice' }}>
      <CardBox
        sx={{
          display: 'flex',
        }}
      >
        {detailsObj.map((_, i) => (
          <Box key={i}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: '600',
              }}
            >
              {_.name}
            </Typography>
            <Typography variant="body2">{_.eth}</Typography>
            <Typography variant="subtitle1">({_.usd})</Typography>
          </Box>
        ))}
      </CardBox>
    </Box>
  );
};

export default NftPrice;
