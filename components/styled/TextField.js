import { styled } from '@mui/material/styles';
import { Field } from 'formik';

export const TextField = styled(Field)(({ theme }) => ({
  width: '-webkit-fill-available',
  // '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':{
  //   boxShadow: 'rgba(149, 157, 165, 0.2) 0px 4px 8px',
  //   height:"6rem",
  //   [theme.breakpoints.only('lg')]: {
  //     height:"5rem",
  //   },
  //   [theme.breakpoints.only('md')]: {
  //     height:"3.5rem",
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     height:"4rem",
  //   },
  // },
  // '& .MuiInputLabel-outlined':{
  //   fontSize:'1.5rem',
  //   marginTop:"0.7vw",
  //   [theme.breakpoints.only('lg')]: {
  //     fontSize:'1rem',
  //   },
  //   [theme.breakpoints.only('md')]: {
  //     fontSize:'0.7rem',
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     fontSize:'0.7rem',
  //     marginTop:".3rem",
  //   }
  // },
  // '& .MuiInputBase-input':{
  //   height:"4rem",
  //   [theme.breakpoints.only('lg')]: {
  //     height:"3rem",
  //   },
  //   [theme.breakpoints.only('md')]: {
  //     height:"1.8rem",
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     height:"2rem",
  //     width:'90vw',
  //   }
  // },
  // '& .MuiOutlinedInput-input':{
  //   fontSize:'1.5rem',
  //   [theme.breakpoints.only('lg')]: {
  //     fontSize:'1rem',
  //   },
  //   [theme.breakpoints.only('md')]: {
  //     fontSize:'0.7rem',
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     fontSize:'0.7rem',
  //   }
  // },
}));
