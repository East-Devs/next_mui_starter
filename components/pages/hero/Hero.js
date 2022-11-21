import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import background from '/public/background/bg.png';

import hero from '/public/background/hero1.png';
import SearchWrapper from '../../common/Search';
import Icons from '../../common/Icons';
import PageWrapper from '../../layout/PageWrapper';
import Wallet from '../../common/Buttons/Wallet';

const Index = () => {
  return (
    <PageWrapper bg={background}>
      <Box
        sx={{
          position: 'absolute',
          top: '5vw',
          right: '10vh',
          zIndex: 3,
        }}
      >
        <Wallet textBtn="Connect Wallet" />
      </Box>
      <Container
        sx={{
          display: 'grid',
          gridTemplateAreas: "'textBlock image'",
          gridTemplateColumns: { md: '1.1fr 1fr' },
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            gridArea: 'textBlock',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
            }}
          >
            A massive explorer of all your
            <Box
              component="span"
              sx={{
                color: 'primary.main',
              }}
            >
              {' NFTs '}
            </Box>
            &
            <Box
              component="span"
              sx={{
                color: 'primary.main',
              }}
            >
              {'  Digital Assets.'}
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              py: 2,
            }}
          >
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries
          </Typography>
          <SearchWrapper />
        </Box>
        <Icons
          sx={{
            position: 'absolute',
            bottom: '10vh',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '60vw',
            right: '1vw',
            zIndex: 2,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image src={hero} alt="hero" />
        </Box>
      </Container>
      {/* <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'red',
          zIndex: 100,
          position: 'gray',
        }}
      /> */}
    </PageWrapper>
  );
};

export default Index;
