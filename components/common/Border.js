import { Box } from '@mui/material';

export const Border = ({ mobile }) => (
  <Box
    sx={{
      display: { xs: !mobile && 'none', md: 'block' },
      borderBottom: '1px solid black',
      my: 2,
    }}
  />
);

export default Border;
