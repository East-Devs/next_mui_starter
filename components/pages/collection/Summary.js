import { Box } from '@mui/system';
import React from 'react';
import BarElements from '../../common/BarElements';
import HeadAndCard from '../../common/HeadAndCard';

const detailsObj = [
  {
    name: 'Contract:',
    value: '0x2ec5ca4f62707cf8181588',
  },
  {
    name: 'Official Site: ',
    value: 'http://dummy.io',
  },
  {
    name: 'Social Profiles:',
    value: '-',
  },
];

const Summary = ({ sxBox }) => {
  return (
    <Box sx={{ ...sxBox }}>
      <HeadAndCard headText="Profile Summary (Edit)">
        <BarElements data={detailsObj} />
      </HeadAndCard>
    </Box>
  );
};

export default Summary;
