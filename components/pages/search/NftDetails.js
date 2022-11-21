import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BarElements from '../../common/BarElements';
import HeadAndCard from '../../common/HeadAndCard';
import detail from '/public/icons/details.png';

const NftDetails = ({ sx }) => {
  const { selectedToken, selectedContract, collection } = useSelector(
    (state) => state.tokens
  );

  const detailsObj = [
    {
      name: 'Owner',
      value: selectedToken.owner,
    },
    {
      name: 'Contract Address:',
      value: selectedContract.id,
    },
    {
      name: 'Creator:',
      value: selectedContract.name,
    },
    {
      name: 'Classification:',
      value: 'Off-Chain (IPFS)',
    },
    {
      name: 'Token ID:',
      value: selectedToken.identifier,
    },
    {
      name: 'Token Standard:',
      value: collection?.[0][0].erc72_1tokens_count === '0' ? 'false' : 'true',
    },
  ];
  return (
    <Box sx={{ gridArea: 'nftDetails' }}>
      <HeadAndCard icon={detail} headText="Details">
        <BarElements data={detailsObj} />
      </HeadAndCard>
    </Box>
  );
};

export default NftDetails;
