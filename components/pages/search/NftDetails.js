import { Box, Typography } from '@mui/material';
import React from 'react';
import BarElements from '../../common/BarElements';
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
        <BarElements data={detailsObj} />
      </HeadAndCard>
    </Box>
  );
};

export default NftDetails;
