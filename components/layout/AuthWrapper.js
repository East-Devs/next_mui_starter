import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

function AuthWrapper({ isAuthenticated, title, children, history }) {
  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <Grid container maxWidth="xl">
      <Grid item sm={12} md={6} sx={{ padding: '3rem', paddingTop: '0px' }}>
        <Link href="/" sx={{ textDecoration: 'none' }}>
          <Box
            sx={{
              textAlign: { sm: 'start' },
              pb: { md: '16px', sm: '8px' },
              pt: { md: '16px', sm: '8px' },
              display: 'flex',
              zIndex: '3',
            }}
          >
            <img
              alt=""
              src="http://app.wandcleaning.pro/wandBluefav.png"
              width="35px"
              style={{ paddingRight: '4px' }}
            />
            {/* <img alt='' src='wordcyan.png' width='90px' /> */}
            <Typography variant="h5">NOTER</Typography>
          </Box>
        </Link>
        <Box
          sx={{
            pt: '10vh',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { sm: '0.7rem', md: '1.4vw' },
              color: 'primary.lightDark',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            ON BOARDING
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3.8vw' },
              color: 'primary.lightDark',
              fontWeight: 'bold',
              pb: '2vh',
            }}
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        sx={{
          backgroundColor: 'primary.light',
          zIndex: 1,
          order: { sm: 1 },
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            p: { lg: '7vh', md: '5vh', sm: '3vh' },
            position: 'relative',
            pb: { lg: '0px', md: '0px' },
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              width: '70%',
              height: '70%',
              backgroundColor: 'primary.main',
              position: 'absolute',
              zIndex: '-1',
              borderRadius: '50%',
            }}
          ></Box>
          <img height={'70%'} src="/2.gif" alt="pablo cleaning" />
        </Box>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontSize: { md: '1.3vw', sm: '0.8rem' },
            color: 'primary.lightDark',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          When your heart speaks, take good notes
          <br />- Judith Exner
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AuthWrapper;
