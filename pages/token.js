import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import PageWrapper from '../components/layout/PageWrapper';
import Activities from '../components/pages/search/Activities';
import Description from '../components/pages/search/Description';
import NftDetails from '../components/pages/search/NftDetails';
import NftImage from '../components/pages/search/NftImage';
import NftPrice from '../components/pages/search/NftPrice';
import NftProperties from '../components/pages/search/NftProperties';
import NftTitle from '../components/pages/search/NftTitle';
import { getTransactions } from '../store/tokenAction';
import { setTransactions } from '../store/tokenSlice';

const search = () => {
  const dispatch = useDispatch();
  const { selectedContract } = useSelector((state) => state.tokens);

  async function apiCall() {
    const data = await getTransactions(selectedContract.id);
    console.log(data.data);
    dispatch(setTransactions(data.data));
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <PageWrapper>
      <Container
        sx={{
          zIndex: 1,
          my: { xs: 2, md: 5 },
        }}
      >
        <Header
          sx={{
            display: 'grid',
            gridTemplateAreas: '"space search walletBtn"',
            height: '250px',
          }}
        />
        <Box
          sx={{
            display: { md: 'grid' },
            gridTemplateAreas: {
              md: "'nftTitle nftDetails' 'nftImage nftDetails' 'nftImage nftProperties' 'nftPrice nftProperties'",
            },
            gridTemplateColumns: { md: '1fr 1.3fr' },
            gridTemplateRows: {
              xs: '',
              md: '150px 280px 200px 130px',
            },
            gap: 3,
          }}
        >
          <NftTitle sx={{ gridArea: 'nftTitle' }} />
          <NftDetails sx={{ gridArea: 'nftDetails' }} />
          <NftProperties sx={{ gridArea: 'nftProperties' }} />
          <NftPrice sx={{ gridArea: 'nftPrice' }} />
          <NftImage sx={{ gridArea: 'nftImage' }} />
        </Box>
        <Description />
        <Activities />
        <Footer />
      </Container>
    </PageWrapper>
  );
};

export default search;
