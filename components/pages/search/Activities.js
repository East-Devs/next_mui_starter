import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import HeadAndCard from '../../common/HeadAndCard';
import des from '/public/icons/activities.png';
import eye from '/public/icons/eye.png';

const arr = ['First', '<', 1, 2, 3, '>'];
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2">
              A total number of 12 records found
            </Typography>
            <Pagination mobile={false} />
          </Box>
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

const Border = ({ mobile }) => (
  <Box
    sx={{
      display: { xs: !mobile && 'none', md: 'block' },
      borderBottom: '1px solid black',
      my: 2,
    }}
  />
);

const Pagination = ({ mobile }) => (
  <Box
    sx={{
      marginLeft: 'auto',
      width: 'fit-content',
      display: {
        xs: !mobile && 'none',
        md: 'block',
      },
    }}
  >
    {arr.map((_, i) => (
      <Box
        component="span"
        key={i}
        sx={{
          px: 2,
          py: 1,
          backgroundColor: 'background.smallCard',
          mx: 1,
          borderRadius: '4px',
        }}
      >
        {_}
      </Box>
    ))}
  </Box>
);

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
