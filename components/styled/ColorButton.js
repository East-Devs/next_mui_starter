import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)(({ theme }) => ({
  width: '15vw',
  marginBottom: '1rem',
  color: 'white',
  fontSize: '1.5vw',
  [theme.breakpoints.down('sm')]: {
    width: '11rem',
    fontSize: '.8rem',
    marginBottom: '1rem',
    color: 'white',
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  background: theme.palette.primary.dark,
  width: '70%',
  padding: '0px',
  color: 'white',
  [theme.breakpoints.up('md')]: {
    height: '2.8vw',
    fontSize: '0.7vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '70%',
    height: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 20px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    fontSize: '2.4vw',
    padding: '0px 10px',
  },
}));
