import { Box, Typography } from '@mui/material';
import Pagination from './Pagination';

const HeadingPagi = ({ text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="body2">{text}</Typography>
      <Pagination mobile={false} />
    </Box>
  );
};

export default HeadingPagi;
