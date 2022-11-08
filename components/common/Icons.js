import { Box } from '@mui/material';
import Image from 'next/image';
import fb from '/public/icons/fb.png';
import twitter from '/public/icons/twitter.png';
import instagram from '/public/icons/instagram.png';

const Icons = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Image src={fb} alt="fb" />
      <Image src={twitter} alt="twitter" />
      <Image src={instagram} alt="instagram" />
    </Box>
  );
};

export default Icons;
