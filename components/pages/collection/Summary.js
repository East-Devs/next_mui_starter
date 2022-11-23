import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import BarElements from '../../common/BarElements';
import HeadAndCard from '../../common/HeadAndCard';

const Summary = ({ sxBox }) => {
  const { collection } = useSelector((state) => state.tokens);

  const detailsObj = [
    {
      name: 'Contract:',
      value: collection?.[0][0]?.as_account,
    },
    {
      name: 'Symbol: ',
      value: collection?.[0][0]?.symbol,
    },
    {
      name: 'Social Profiles:',
      value: '-',
    },
  ];

  return (
    <Box sx={{ ...sxBox }}>
      <HeadAndCard headText="Profile Summary (Edit)">
        <BarElements data={detailsObj} />
      </HeadAndCard>
    </Box>
  );
};

export default Summary;
