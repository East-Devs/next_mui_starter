import { Box, Typography } from '@mui/material';

export const BarElements = ({ data }) => (
  <Box>
    {data.map((_, i) => (
      <Box
        key={i}
        sx={{
          backgroundColor: 'white',
          opacity: '0.47',
          my: 2,
          display: 'grid',
          gridTemplateAreas: "'name value'",
          gridTemplateColumns: '1fr 1.3fr',
          borderRadius: '10px',
          p: 1,
        }}
      >
        <Typography variant="body2" sx={{ gridArea: 'name' }}>
          {_.name}
        </Typography>
        <Typography variant="body2" sx={{ gridArea: 'value' }}>
          {_.value}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default BarElements;
