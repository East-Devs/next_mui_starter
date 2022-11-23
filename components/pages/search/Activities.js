import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Border from '../../common/Border';
import HeadAndCard from '../../common/HeadAndCard';
import HeadingPagi from '../../common/Table/HeadingPagi';
import Pagination from '../../common/Table/Pagination';
import des from '/public/icons/activities.png';
import eye from '/public/icons/eye.png';
import moment from 'moment';

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
  const [currentPage, setCurrentPage] = useState(1);
  const { transactions } = useSelector((state) => state.tokens);

  const [recordPerPage, setRecordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentPosts = transactions?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <Box sx={{ gridArea: 'activities', mb: { xs: 2, md: 0 }, my: 3 }}>
      <HeadAndCard icon={des} headText="Item Activity">
        <Box>
          <HeadingPagi
            text="A total number of 12 records found"
            tableData={transactions?.length}
            recordPerPage={recordPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Border />
          <TableHead />
          <Border />
          <TableBody currentPosts={currentPosts} />
          <Pagination
            tableData={transactions?.length}
            recordPerPage={recordPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
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

const TableBody = ({ currentPosts }) => {
  return (
    <>
      {currentPosts.map((activity, activityId) => (
        <Box
          key={activityId}
          sx={{
            display: { md: 'grid' },
            gridTemplateAreas: "'icon hash date action price from to'",
            gridTemplateColumns: '0.2fr 1fr 1fr 0.4fr 1fr 1fr 1fr',
            gap: 1,
            pb: 2,
          }}
        >
          {/* {Object.keys(activity).map((key, i) => { */}
          {/* if (key == 'vid') { */}
          {/* return ( */}
          <Box
            sx={{
              position: 'relative',
              width: '20px',
              height: '20px',
              gridArea: 'icon',
            }}
          >
            <Image src={eye} alt="eye" />
          </Box>
          {/* ); */}
          {/* } else if (key == 'block_range') { */}
          {/* return; */}
          {/* } */}
          {/* return ( */}

          <Typography
            variant="body2"
            sx={{
              gridArea: 'hash',
              overflow: 'hidden',
            }}
          >
            {activity.id}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              gridArea: 'date',
              overflow: 'hidden',
            }}
          >
            {moment(activity.date * 1000).format('YYYY-MM-DD')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              gridArea: 'price',
              overflow: 'hidden',
            }}
          >
            {`${Number(activity.value).toFixed(2)} eth ${(
              activity.eth * activity.value
            ).toFixed(2)}USD`}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              gridArea: 'from',
              overflow: 'hidden',
            }}
          >
            {activity.from}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              gridArea: 'to',
              overflow: 'hidden',
            }}
          >
            {activity.to}
          </Typography>
          {/* <Typography
            variant="body2"
            sx={{
              gridArea: 'hash',
              overflow: 'hidden',
            }}
          >
            {activity.id}
          </Typography> */}
        </Box>
      ))}
    </>
  );
};

export default Description;
