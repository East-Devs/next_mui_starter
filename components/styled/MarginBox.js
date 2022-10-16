import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MarginBox = styled(Box)(({ theme }) => ({
  marginBottom: '1.2vw',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

export const CardBox = styled(Box)(({ theme }) => ({
  padding: `32px 24px`,
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: theme.palette.backgroundSecondary.default,
  gridColumnGap: theme.spacing(2),
  gridRowGap: theme.spacing(3),
  textAlign: 'left',
}));
export const DotBox = styled(Box)(() => ({
  height: '8px',
  width: '8px',
  backgroundColor: 'black',
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: '1rem',
}));

export const FieldBox = styled(Box)(({ theme }) => ({
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '80vw',
  },
}));
