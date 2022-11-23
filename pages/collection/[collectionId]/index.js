import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';
import Loading from '../../../components/layout/Loading';
import PageWrapper from '../../../components/layout/PageWrapper';
import Collection from '../../../components/pages/collection/Collection';
import { NftTitle } from '../../../components/pages/collection/NftTitle';
import Overview from '../../../components/pages/collection/Overview';
import Summary from '../../../components/pages/collection/Summary';
import { getCollection } from '../../../store/tokenAction';
import {
  setCollection,
  setIsLoadingCollections,
} from '../../../store/tokenSlice';

const Collections = () => {
  const { isLoadingCollections, selectedContract } = useSelector(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const { collectionId } = router.query;

  async function apiCall() {
    dispatch(setIsLoadingCollections(true));

    const data = await getCollection(collectionId);
    dispatch(setCollection(data.data));
    dispatch(setIsLoadingCollections(false));
  }

  React.useEffect(() => {
    apiCall();
  }, [collectionId]);

  return (
    <PageWrapper>
      {isLoadingCollections ? (
        <Loading loading={isLoadingCollections} />
      ) : (
        <Container
          sx={{
            zIndex: 1,
            my: { xs: 2, md: 5 },
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
          <Box
            sx={{
              display: { md: 'grid' },
              gridTemplateAreas: "'overview summary'",
              gridTemplateColumns: '1fr 1fr',
              gap: 3,
            }}
          >
            <Overview sxBox={{ gridArea: 'overview' }} />
            <Summary sxBox={{ gridArea: 'summary' }} />
          </Box>
          <Collection sxBox={{ gridArea: 'collection' }} />
          <Footer sxBox={{ gridArea: 'footer' }} />
        </Container>
      )}
    </PageWrapper>
  );
};

export default Collections;
