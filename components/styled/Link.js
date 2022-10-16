import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const BlueLink = styled(Link)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '1vw',
  color: theme.palette.primary.lightDark,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6rem',
  },
}));
