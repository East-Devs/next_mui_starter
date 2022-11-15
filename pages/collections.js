import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import PageWrapper from '../components/layout/PageWrapper';
import Collection from '../components/pages/collection/Collection';
import { NftTitle } from '../components/pages/collection/NftTitle';
import Overview from '../components/pages/collection/Overview';
import Summary from '../components/pages/collection/Summary';

const Collections = () => {
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
              xs: "'header' 'nftTitle' 'nftImage' 'overview' 'summary collection' 'footer'",
              md: "'header header' 'nftTitle nftTitle' 'overview summary' 'collection collection' 'footer footer'",
            },
            gridTemplateColumns: { md: '1fr 1fr' },
            gridTemplateRows: {
              xs: '',
              md: '100px 150px 320px 1fr 100px',
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
          <Overview sxBox={{ gridArea: 'overview' }} />
          <Summary sxBox={{ gridArea: 'summary' }} />
          <Collection sxBox={{ gridArea: 'collection' }} />
          <Footer sxBox={{ gridArea: 'footer' }} />
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default Collections;
