import { Box, Typography } from '@mui/material';
import React from 'react';
import HeadAndCard from '../../common/HeadAndCard';
import des from '/public/icons/des.png';

const Description = ({ sx }) => {
  return (
    <Box sx={{ gridArea: 'description' }}>
      <HeadAndCard icon={des} headText="Description">
        <Typography>
          A community-driven collectibles project featuring art by Burnt Toast.
          Doodles come in a joyful range of colors, traits and sizes with a
          collection size of 10,000. Each Doodle allows its owner to vote for
          experiences and activations paid for by the Doodles Community
          Treasury. Burnt Toast is the working alias for Scott Martin, a
          Canadian–based illustrator, designer, animator and muralist.
        </Typography>
      </HeadAndCard>
    </Box>
  );
};

export default Description;
