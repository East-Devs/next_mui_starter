import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Border from '../../common/Border';
import HeadAndCard from '../../common/HeadAndCard';
import HeadingPagi from '../../common/Table/HeadingPagi';
import Pagination from '../../common/Table/Pagination';
import des from '/public/icons/activities.png';
import eye from '/public/icons/eye.png';

const head = ['', 'Txn Hash', 'Age', 'Action', 'Price', 'From', 'To'];
const activities = [
  {
    icon: '',
    hash: '0x2ec5ca4f6270...',
    age: '3 Days 34 Mins ago',
    action: 'Transfer',
    price: '18.49 ETH ($29,019.69)',
    from: '0x2ec5ca4f6270...',
    to: '0x2ec5ca4f6270...',
  },
  {
    icon: '',
    hash: '0x2ec5ca4f6270...',
    age: '4 Days 34 Mins ago',
    action: 'Transfer',
    price: '18.49 ETH ($29,019.69)',
    from: '0x2ec5ca4f6270...',
    to: '0x2ec5ca4f6270...',
  },
  {
    icon: '',
    hash: '0x2ec5ca4f6270...',
    age: '5 Days 34 Mins ago',
    action: 'Mint',
    price: '18.49 ETH ($29,019.69)',
    from: '0x2ec5ca4f6270...',
    to: '0x2ec5ca4f6270...',
  },
];
const Description = ({ sx }) => {
  return (
    <Box sx={{ gridArea: 'activities', mb: { xs: 2, md: 0 } }}>
      <HeadAndCard icon={des} headText="Item Activity">
        <Box>
          <HeadingPagi text="A total number of 12 records found" />
          <Border />
          <TableHead />
          <Border />
          <TableBody />
          <Pagination />
        </Box>
      </HeadAndCard>
    </Box>
  );
};

const TableHead = () => (
  <Box
    sx={{
      display: { xs: 'none', md: 'grid' },
      gridTemplateAreas: "'icon hash age action price from to'",
      gridTemplateColumns: '0.2fr 1fr 1fr 0.4fr 1fr 1fr 1fr',
    }}
  >
    {head.map((_, i) => (
      <Typography
        key={i}
        sx={{
          fontWeight: '700',
        }}
      >
        {_}
      </Typography>
    ))}
  </Box>
);

const TableBody = () => {
  return (
    <>
      {activities.map((activity, activityId) => (
        <Box
          key={activityId}
          sx={{
            display: { md: 'grid' },
            gridTemplateAreas: "'icon hash age action price from to'",
            gridTemplateColumns: '0.2fr 1fr 1fr 0.4fr 1fr 1fr 1fr',
            pb: 2,
          }}
        >
          {Object.keys(activity).map((key, i) => {
            if (key == 'icon') {
              return (
                <Image
                  key={i}
                  src={eye}
                  width={20}
                  height={20}
                  style={{ paddingLeft: '10px' }}
                  alt="eye"
                />
              );
            }
            return (
              <Box
                key={i}
                sx={{
                  display: { xs: 'grid', md: 'block' },
                  gridTemplateAreas: 't1 t2',
                  gridTemplateColumns: '1fr 2fr',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: '700', pr: 3, display: { md: 'none' } }}
                >
                  {key}
                </Typography>
                <Typography variant="body2">{activity[key]}</Typography>
              </Box>
            );
          })}
        </Box>
      ))}
    </>
  );
};

export default Description;
