import { Box, Typography } from '@mui/material';
import React from 'react';
import HeadAndCard from '../../common/HeadAndCard';
import detail from '/public/icons/details.png';

const detailsObj = [
  {
    name: 'Owner',
    value: '0x27df6ec5ca4f62707cf8181588b',
  },
  {
    name: 'Contract Address:',
    value: '0x2ec5ca4f62707cf8181588b03',
  },
  {
    name: 'Creator:',
    value: 'Doodles: Deployer',
  },
  {
    name: 'Classification:',
    value: 'Off-Chain (IPFS)',
  },
  {
    name: 'Token ID:',
    value: '6065',
  },
  {
    name: 'Token Standard:',
    value: 'ERC-721',
  },
];

const NftDetails = ({ sx }) => {
  return (
    <Box sx={{ gridArea: 'nftDetails' }}>
      <HeadAndCard icon={detail} headText="Details">
        <Box>
          {detailsObj.map((_, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: 'white',
                opacity: '0.47',
                my: 2,
                display: 'grid',
                gridTemplateAreas: "'name value'",
                gridTemplateColumns: '1fr 1.3fr',
                borderRadius: '10px',
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ gridArea: 'name' }}>
                {_.name}
              </Typography>
              <Typography variant="body2" sx={{ gridArea: 'value' }}>
                {_.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </HeadAndCard>
    </Box>
  );
};

export default NftDetails;
