import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardBox = styled(Box)(({ theme }) => ({
  padding: `32px 24px`,
  borderRadius: theme.spacing(2),
  background: theme.palette.background.default,
  gridColumnGap: theme.spacing(2),
  gridRowGap: theme.spacing(3),
  textAlign: 'left',
  border: '1px solid black',
  [theme.breakpoints.up('lg')]: {
    padding: `20px 24px`,
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '1rem',
  },
}));
