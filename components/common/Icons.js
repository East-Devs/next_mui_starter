import { Box } from '@mui/material';
import Image from 'next/image';
import fb from '/public/icons/fb.png';
import twitter from '/public/icons/twitter.png';
import instagram from '/public/icons/instagram.png';

const Icons = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Image src={fb} />
      <Image src={twitter} />
      <Image src={instagram} />
    </Box>
  );
};

export default Icons;
