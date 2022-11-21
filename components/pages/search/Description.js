import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import HeadAndCard from '../../common/HeadAndCard';
import des from '/public/icons/des.png';

const Description = ({ sx }) => {
  const { selectedToken } = useSelector((state) => state.tokens);
  return (
    <Box sx={{ gridArea: 'description' }}>
      <HeadAndCard icon={des} headText="Description">
        <Typography>{selectedToken?.info?.description}</Typography>
      </HeadAndCard>
    </Box>
  );
};

export default Description;
