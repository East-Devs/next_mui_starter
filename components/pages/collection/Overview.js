import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import BarElements from '../../common/BarElements';
import Border from '../../common/Border';
import HeadAndCard from '../../common/HeadAndCard';

const Overview = ({ sxBox }) => {
  const { collection } = useSelector((state) => state.tokens);
  const heading = [
    'Minimum Price',
    `$ @${collection?.[2][0]?.min_value || 'No Transaction'} ${Number(
      collection?.[2][0]?.min_eth
    ).toFixed(3)} ETH`,
  ];

  const detailsObj = [
    {
      name: 'Max Total Supply:',
      value: collection?.[0][0]?.erc72_1tokens_count,
    },
    {
      name: 'Holder:',
      value: '5,233',
    },
    {
      name: 'Transfers:',
      value: '-',
    },
  ];

  return (
    <Box sx={{ ...sxBox }}>
      <HeadAndCard headText="Overview (ERC-721)">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {heading.map((_, i) => (
            <Typography
              variant="body1"
              key={i}
              sx={{
                fontWeight: '600',
              }}
            >
              {_}
            </Typography>
          ))}
        </Box>
        <Border />
        <BarElements data={detailsObj} />
      </HeadAndCard>
    </Box>
  );
};

export default Overview;
