import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const LinkText = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '1vw',
  color: theme.palette.primary.lightDark,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6rem',
  },
}));

export const CardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.lightDark,
  paddingBottom: theme.spacing(1),
  fontSize: '1.05vw',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  color: theme.palette.primary.lightDark,
  fontWeight: '500',
  fontSize: '20px',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3vw',
  },
}));
