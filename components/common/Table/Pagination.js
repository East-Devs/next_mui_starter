import { Box } from '@mui/material';
const arr = ['First', '<', 1, 2, 3, '>'];

// const Pagination = ({ mobile }) => (
// <Box
//   sx={{
//     marginLeft: 'auto',
//     width: 'fit-content',
//     display: {
//       xs: !mobile && 'none',
//       md: 'block',
//     },
//   }}
// >
//     {arr.map((_, i) => (
{
  /* <Box
  component="span"
  key={i}
  sx={{
    px: 2,
    py: 1,
    backgroundColor: 'background.smallCard',
    mx: 1,
    borderRadius: '4px',
  }}
>
  {_}
</Box> */
}
//     ))}
//   </Box>
// );

// export default Pagination;

import React from 'react';

const Pagination = ({
  recordPerPage,
  tableData,
  currentPage,
  setCurrentPage,
  mobile,
}) => {
  const pageLimit = 4;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(tableData / recordPerPage); i++) {
    pageNumbers.push(i);
  }
  const nextPage = () => {
    if (currentPage >= pageNumbers[pageNumbers.length - 1]) {
      return;
    }
    if (currentPage !== pageNumbers[-1]) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const StartPagination = () => {
    if (1 === currentPage) {
      return null;
    }
    return (
      <div style={{ display: 'flex' }}>
        <Item text={'1'} onClick={() => setCurrentPage(1)} />
        <Item text="..." />
      </div>
    );
  };

  const EndPagination = () => {
    let last = pageNumbers[pageNumbers.length - 1];
    if (last <= currentPage + 1) {
      return null;
    }
    return (
      <div style={{ display: 'flex' }}>
        <Item text="..." />
        <Item text={last} onClick={() => setCurrentPage(last)} />
      </div>
    );
  };

  const getPaginationGroup = () => {
    let arr = [];
    debugger;
    let last = pageNumbers[pageNumbers.length - 1];
    if (currentPage + pageLimit >= last) {
      for (let i = 0; i < pageLimit; i++) {
        console.log(
          currentPage,
          '+',
          i,
          '-',
          pageLimit,
          '+',
          1,
          currentPage + i - pageLimit + 1
        );
        var num = currentPage + i - pageLimit + 1;
        if (num > 0) {
          arr.push(num);
        }
      }
    } else {
      for (let i = 0; i < pageLimit; i++) {
        console.log(currentPage + i);
        arr.push(currentPage + i);
      }
    }

    // return arr;
    return pageNumbers;
  };
  return (
    <Box
      sx={{
        marginLeft: 'auto',
        width: 'fit-content',
        display: {
          xs: !mobile && 'none',
          md: 'block',
        },
      }}
    >
      <Item onClick={prevPage} text="Prev" />

      {/* <StartPagination /> */}
      {getPaginationGroup().map((number, i) => (
        <Box
          key={i}
          component="span"
          onClick={() => setCurrentPage(number)}
          sx={{
            px: 2,
            py: 1,
            backgroundColor: 'background.smallCard',
            mx: 1,
            borderRadius: '4px',
            ...(currentPage === number && { backgroundColor: 'primary.main' }),
          }}
        >
          {number}
        </Box>
      ))}
      {/* <EndPagination /> */}
      <Item onClick={nextPage} text="Next" />
    </Box>
  );
};

const Item = ({ onClick, text }) => {
  return (
    <Box
      component="span"
      onClick={onClick}
      sx={{
        px: 2,
        py: 1,
        backgroundColor: 'background.smallCard',
        mx: 1,
        borderRadius: '4px',
      }}
    >
      {text}
    </Box>
  );
};

export default Pagination;
