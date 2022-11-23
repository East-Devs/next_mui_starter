import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import React, { useRef, useState } from 'react';
import avatar from '/public/nft/avatar.png';
import Border from './Border';
import Image from 'next/image';
import { getSearchResults } from '../../store/tokenAction';
import {
  setIsLoadingResults,
  setSearchResults,
  setSelectedContract,
} from '../../store/tokenSlice';
import Link from 'next/link';
import Modal from '@mui/material/Modal';

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
    marginLeft: theme.spacing(0),
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
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '8rem',

    '&:focus': {
      width: '8rem',
    },
  },
}));

const SearchWrapper = () => {
  const [open, setOpen] = React.useState(false);
  const ref = useRef(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Search onClick={handleOpen} ref={ref}>
        <StyledInputBase
          placeholder="Search By Address/Txn Hash/Block/Token/Ens"
          inputProps={{ 'aria-label': 'search' }}
          onChange={async (e) => {
            setOpen(true);
          }}
        />
        <SearchButton>
          <Typography>Search</Typography>
          <SearchIcon />
        </SearchButton>
      </Search>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Pop boxRef={ref} />
      </Modal>
    </Box>
  );
};

const Pop = ({ boxRef }) => {
  const [value, setValue] = useState('');

  const { searchResults, isLoadingResults } = useSelector(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(boxRef);
  }, []);
  return (
    <Box
      sx={{
        p: 1,
        bgcolor: 'background.blurGrey',
        backdropFilter: 'blur(6px)',
        position: 'absolute',
        top: boxRef.current.offsetParent.offsetTop,
        left: boxRef.current.offsetParent.offsetLeft,
        width: boxRef.current.offsetParent.offsetWidth,
        border: '1px solid #000',
        borderRadius: '10px',
      }}
    >
      <Search
        sx={{
          border: 'none',
          background: 'transparent',
        }}
      >
        <StyledInputBase
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          autoFocus
          onChange={async (e) => {
            setValue(e.target.value);
            dispatch(setIsLoadingResults(true));
            var data = await getSearchResults(e.target.value);
            if (data?.data) {
              dispatch(setSearchResults(data.data));
            }
            dispatch(setIsLoadingResults(false));
          }}
        />
        <SearchButton>
          <Typography>Search</Typography>
          <SearchIcon />
        </SearchButton>
      </Search>
      <Border
        sxBox={{
          mt: 1,
        }}
      />

      <Typography
        variant="body2"
        sx={{
          fontWeight: '700',
          fontSize: '14px',
        }}
      >
        Tokens (ERC 721)
      </Typography>
      <Box sx={{ pl: 3, height: '30vh', overflow: 'auto' }}>
        {isLoadingResults && (
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <CircularProgress size="2rem" />
          </Box>
        )}
        {searchResults.map((item, i) => {
          return (
            <>
              <Link href={`/collection/${item.id}`}>
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                  }}
                  onClick={() => {
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
  );
};

export default SearchWrapper;
