// import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Fade, Popper, Typography, Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import avatar from '/public/nft/avatar.png';
import Border from './Border';
import Image from 'next/image';
import { getSearchResults } from '../../store/tokenAction';
import { setSearchResults, setSelectedContract } from '../../store/tokenSlice';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

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

const tokenResult = [
  {
    img: avatar,
    name: 'Genesis Box (GBOX)',
    address: '0x27df6ec5ca4f62707cf8181588b',
    url: 'http://testmail.io',
  },
  {
    img: avatar,
    name: 'Genesis Box (GBOX)',
    address: '0x27df6ec5ca4f62707cf8181588b',
    url: 'http://testmail.io',
  },
  {
    img: avatar,
    name: 'Genesis Box (GBOX)',
    address: '0x27df6ec5ca4f62707cf8181588b',
    url: 'http://testmail.io',
  },
];

const SearchWrapper = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const [value, setValue] = useState('');

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <>
      <Search onClick={handleClick} ref={ref}>
        <StyledInputBase
          placeholder="Search By Address/Txn Hash/Block/Token/Ens"
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={async (e) => {
            setValue(e.target.value);
            setOpen(true);

            debugger;
            var data = await getSearchResults(e.target.value);
            if (data?.data) {
              dispatch(setSearchResults(data.data));
            }
          }}
        />
        <SearchButton>
          <Typography>Search</Typography>
          <SearchIcon />
        </SearchButton>
      </Search>
      <Pop open={open} id={id} anchorEl={anchorEl} value={value} />
    </>
  );
};

const Pop = ({ open, id, anchorEl, value }) => {
  const searchResults = useSelector((state) => state.tokens.searchResults);
  const dispatch = useDispatch();
  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      transition
      sx={{
        height: '20vh',
        overflow: 'auto',
        zIndex: 5,
        width: { xs: '90vw', md: '30vw' },
      }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: '700',
                fontSize: '14px',
              }}
            >
              Tokens (ERC 721)
            </Typography>
            <Border />
            <Box>
              {searchResults.map((item, i) => {
                return (
                  <>
                    <Link href="/collections">
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                        }}
                        onClick={() => {
                          debugger;
                          dispatch(setSelectedContract(item));
                        }}
                      >
                        <Box
                          sx={{
                            width: '56px',
                            width: '56px',
                          }}
                        >
                          <Image src={avatar} />
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '14px',
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '14px',
                            }}
                          >
                            {item.id}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '14px',
                            }}
                          >
                            {item?.symbol}
                          </Typography>

                          {Object.keys(item).map((key) => {
                            var a = item[key];
                            if (key == 'img') {
                              return;
                            }
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: '14px',
                              }}
                            >
                              {item[key]}
                            </Typography>;
                          })}
                        </Box>
                      </Box>
                    </Link>
                    <Border />
                  </>
                );
              })}
            </Box>
          </Box>
        </Fade>
      )}
    </Popper>
  );
};

export default SearchWrapper;
