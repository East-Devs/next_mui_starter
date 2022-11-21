import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardBox } from '../../styled/MarginBox';

const NftPrice = ({ sx }) => {
  const { collection } = useSelector((state) => state.tokens);
  const minValue = collection?.[2][0].min_value;
  const minEth = collection?.[2][0].min_eth;

  const maxValue = collection?.[2][0].min_value;
  const maxEth = collection?.[2][0].min_eth;

  const detailsObj = [
    {
      name: 'Min. Price',
      eth: `${minValue} Eth`,
      usd: `$${+minValue * +minEth}`,
    },
    {
      name: 'Last Sale (Item)',
      eth: '14.3 Eth',
      usd: '$8,318.24',
    },
    {
      name: 'Max. Price',
      eth: `${maxValue} Eth`,
      usd: `$${+maxValue * +maxEth}`,
    },
  ];

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
