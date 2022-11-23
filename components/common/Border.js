import { Box } from '@mui/material';

export const Border = ({ mobile, sxBox }) => (
  <Box
    sx={{
      display: { xs: !mobile && 'none', md: 'block' },
      borderBottom: '1px solid black',
      my: 2,
      ...sxBox,
    }}
  />
);
export const ShodowBox = ({ sxBox }) => (
  <Box
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 12px',
    }}
  />
);

export default Border;
