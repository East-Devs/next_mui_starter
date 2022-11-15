import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BarElements from '../../common/BarElements';
import Border from '../../common/Border';
import HeadAndCard from '../../common/HeadAndCard';

const heading = ['Minimum Price', '$8,370.56 @ 5.300000 ETH'];

const detailsObj = [
  {
    name: 'Max Total Supply:',
    value: '10,000 DODDLE',
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

const Overview = ({ sxBox }) => {
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
