import { Box, Typography } from '@mui/material';
import { height } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import Border from '../../common/Border';
import HeadingPagi from '../../common/Table/HeadingPagi';
import { CardBox } from '../../styled/MarginBox';
import nft from '/public/nft/nft.png';

const headings = [
  { name: 'Transfers', status: 'unactive' },
  { name: 'Holders', status: 'unactive' },
  { name: 'Inventory', status: 'active' },
  { name: 'Info', status: 'unactive' },
  { name: 'NFT Trades', status: 'unactive' },
];

const Collection = ({ sxBox }) => {
  return (
    <CardBox
      sx={{
        ...sxBox,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        {headings.map((_, i) => {
          return (
            <Typography
              variant="body1"
              sx={{
                fontWeight: '300',
                mr: 3,
                ...(_.status === 'active' && {
                  fontWeight: '',
                }),
              }}
              key={i}
            >
              {_.name}
            </Typography>
          );
        })}
      </Box>
      <Border />
      <HeadingPagi text=" Latest 10,000 active tokens (From a total of 10,000 tokens)" />
      <Border />
      <CardWrapper />
    </CardBox>
  );
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const cardData = [
  {
    name: 'Token ID',
    value: '2344',
  },
  {
    name: 'Owner',
    value: '0x2ec5ca345f54...',
  },
];

const CardWrapper = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px, 1fr))',
        gap: 4,
      }}
    >
      {arr.map((_, i) => (
        <Box key={i}>
          <Box
            sx={{
              position: 'relative',
              '& > span': {
                borderRadius: '20px',
              },
            }}
          >
            <Image src={nft} />
          </Box>

          <Box
            sx={{
              border: '1px solid black',
              p: '1vh 1vw',
              borderRadius: '20px',
              backgroundColor: 'background.smallCard',
              width: '100%',
              mt: 1,
            }}
          >
            {cardData.map((_, i) => {
              return (
                <Typography
                  key={i}
                  variant="subtitle2"
                  sx={{
                    fontWeight: '700',
                  }}
                >
                  {_.name}
                  <Box
                    component="span"
                    sx={{
                      fontWeight: '400',
                    }}
                  >
                    {'  ' + _.value}
                  </Box>
                </Typography>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Collection;
