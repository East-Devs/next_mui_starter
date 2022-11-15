import { Box } from '@mui/material';
const arr = ['First', '<', 1, 2, 3, '>'];

const Pagination = ({ mobile }) => (
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
    {arr.map((_, i) => (
      <Box
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
      </Box>
    ))}
  </Box>
);

export default Pagination;
