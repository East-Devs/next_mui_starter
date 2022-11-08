import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  padding: '0.5rem 0.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid black',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  '& .MuiInputBase-input': {
    width: '20rem',
  },
  '& .MuiInputBase-input:focus': {
    width: '20rem',
  },
}));

const SearchButton = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '8rem',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '20px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    // width: '-webkit-fill-available',
    width: '8rem',

    '&:focus': {
      // width: '-webkit-fill-available',
      width: '8rem',
    },
  },
}));

const SearchWrapper = () => {
  return (
    <Link href="/search">
      <Search>
        <StyledInputBase
          placeholder="Search By Address/Txn Hash/Block/Token/Ens"
          inputProps={{ 'aria-label': 'search' }}
        />
        <SearchButton>
          <Typography>Search</Typography>
          <SearchIcon />
        </SearchButton>
      </Search>
    </Link>
  );
};

export default SearchWrapper;
