import { Box, Typography } from '@mui/material';
import React from 'react';
import HeadAndCard from '../../common/HeadAndCard';
import properties from '/public/icons/properties.png';

const detailsObj = [
  {
    name: 'Body',
    value: 'Combo 1 Puffer',
    rarity: '1.6',
  },
  {
    name: 'Face',
    value: 'Surprised',
    rarity: '1.6',
  },

  {
    name: 'Head:',
    value: 'Blue',
    rarity: '1.6',
  },
  {
    name: 'Hair',
    value: 'Purple Brushcut',
    rarity: '1.6',
  },
  {
    name: 'Background:',
    value: 'Fire  ',
    rarity: '1.6',
  },
];

const NftProperties = ({ sx }) => {
  return (
    <Box sx={{ gridArea: 'nftProperties' }}>
      <HeadAndCard icon={properties} headText="Properties (5)">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 1,
          }}
        >
          {detailsObj.map((_, i) => (
            <Box
              key={i}
              sx={{
                m: 2,
                borderRadius: '20px',
                backgroundColor: 'white',
                opacity: '0.47',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: '700' }}>
                {_.name}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: '500' }}>
                {_.value}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: '300' }}>
                {`rarity: ${_.rarity}%`}
              </Typography>
            </Box>
          ))}
        </Box>
      </HeadAndCard>
    </Box>
  );
};

export default NftProperties;
