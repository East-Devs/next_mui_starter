import { Box, Container } from '@mui/material';
import React from 'react';
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

const search = () => {
  return (
    <PageWrapper>
      <Container
        sx={{
          zIndex: 1,
          my: { xs: 2, md: 5 },
        }}
      >
        <Box
          sx={{
            display: { md: 'grid' },
            gridTemplateAreas: {
              xs: "'header' 'nftTitle' 'nftImage' 'nftImage' 'nftPrice nftProperties' 'description' 'activities' 'footer'",
              md: "'header header' 'nftTitle nftDetails' 'nftImage nftDetails' 'nftImage nftProperties' 'nftPrice nftProperties' 'description description' 'activities activities' 'footer footer'",
            },
            gridTemplateColumns: { md: '1fr 1.3fr' },
            gridTemplateRows: {
              xs: '',
              md: '100px 150px 280px 200px 130px 220px 450px 100px',
            },
            gap: 3,
          }}
        >
          <Header
            sx={{
              gridArea: 'header',
              display: 'grid',
              gridTemplateAreas: '"space search walletBtn"',
            }}
          />
          <NftTitle sx={{ gridArea: 'nftTitle' }} />
          <NftDetails sx={{ gridArea: 'nftDetails' }} />
          <NftProperties sx={{ gridArea: 'nftProperties' }} />
          <NftPrice sx={{ gridArea: 'nftPrice' }} />
          <NftImage sx={{ gridArea: 'nftImage' }} />
          <Description sx={{ gridArea: 'description' }} />
          <Activities sx={{ gridArea: 'activities' }} />
          <Footer sx={{ gridArea: 'footer' }} />
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default search;
