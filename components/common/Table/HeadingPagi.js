import { Box, Typography } from '@mui/material';
import Pagination from './Pagination';

const HeadingPagi = ({
  text,
  recordPerPage,
  tableData,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="body2">{text}</Typography>
      <Pagination
        mobile={false}
        tableData={tableData}
        recordPerPage={recordPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default HeadingPagi;
