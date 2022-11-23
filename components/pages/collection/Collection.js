import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedToken } from '../../../store/tokenSlice';
import Border, { ShodowBox } from '../../common/Border';
import ImageFallback from '../../common/FallbackImage';
import HeadingPagi from '../../common/Table/HeadingPagi';
import { CardBox } from '../../styled/MarginBox';

const headings = [
  { name: 'Transfers', status: 'unactive' },
  { name: 'Holders', status: 'unactive' },
  { name: 'Inventory', status: 'active' },
  { name: 'Info', status: 'unactive' },
  { name: 'NFT Trades', status: 'unactive' },
];

const Collection = ({ sxBox }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { collection } = useSelector((state) => state.tokens);

  const [recordPerPage, setRecordsPerPage] = useState(15);

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentPosts = collection?.[1].slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <CardBox
      sx={{
        ...sxBox,
        my: 3,
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
      <HeadingPagi
        text={` Latest ${collection?.[1].length} active tokens (From a total of ${collection?.[1].length} tokens)`}
        tableData={collection?.[1].length}
        recordPerPage={recordPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Border />
      <CardWrapper currentPosts={currentPosts} />
    </CardBox>
  );
};

const CardWrapper = ({ currentPosts }) => {
  const dispatch = useDispatch();
  const { selectedContract } = useSelector((state) => state.tokens);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr 1fr',
          md: 'repeat(3,1fr)',
          lg: 'repeat(4,minmax(180px,1fr))',
          xl: 'repeat(5,minmax(180px,1fr))',
        },
        gap: 4,
      }}
    >
      {currentPosts?.map((_, i) => {
        var obj = [
          {
            name: 'Token ID',
            value: _.identifier,
          },
          {
            name: 'Owner',
            value: _.owner,
          },
        ];
        return (
          <Link
            href={`/collection/${selectedContract.id}/${_.identifie}`}
            key={i}
          >
            <Box
              sx={{
                width: '180px',
              }}
              onClick={() => {
                dispatch(setSelectedToken(_));
              }}
            >
              <Box></Box>
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    height: '180px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 0px 22px',
                    '& > span': {
                      borderRadius: '20px',
                    },
                  }}
                >
                  <ImageFallback src={_.info?.image} layout="fill" />
                </Box>
              </Box>

              <Box
                sx={{
                  border: '1px solid black',
                  p: '1vh 1vw',
                  borderRadius: '20px',
                  backgroundColor: 'background.smallCard',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 0px 22px',
                  mt: 1,
                  overflow: 'hidden',
                }}
              >
                {obj.map((_, i) => {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                      }}
                    >
                      <Typography
                        key={i}
                        variant="subtitle2"
                        sx={{
                          fontWeight: '700',
                          position: 'inline-block',
                        }}
                      >
                        {_.name + ': '}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: '400',
                        }}
                      >
                        {_.value}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default Collection;
