import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

import {
  CssBaseline,
  Box,
  Popper,
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  Container,
  Avatar,
  Button,
  IconButton,
  Menu,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';

import Link from 'next/Link';

import MenuIcon from '@mui/icons-material/Menu';

// import { NEXT_SERVICE } from '../../actions/orderAction';

import { connect } from 'react-redux';
// import {LOGOUT} from '../../actions/authActions'

const drawerWidth = '18vw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr 1fr',
    gridTemplateAreas: `"search next messages avatar"`,
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: `"logo search messages menu"`,
      alignItems: 'center',
      textAlign: 'left',
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    paddingTop: theme.spacing(3),
    background: theme.palette.primary.light,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      width: `100%`,
    },
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    overflow: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      minHeight: '100vh',
      height: '100%',
      zIndex: '1202',
    },
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.down('sm')]: {
      width: 0,
      display: 'none',
    },
  },
  search: {
    gridArea: 'search',
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    '& input::placeholder': {
      fontSize: '20px',
      color: 'black',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  inputInput: {
    fontWeight: 'bold',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '20ch',
      },
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: '1rem',
  },
  hideCard: {
    [theme.breakpoints.down('sm')]: {
      display: 'none !important',
    },
  },
  main: {
    padding: '1rem',
    width: '-webkit-fill-available',
    background: theme.palette.primary.light,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px 10px`,
    },
  },
  paper: {
    padding: theme.spacing(2),
    zIndex: 1202,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'baseline',
    color: theme.palette.lightFill.main,
  },
  lightFill: {
    color: theme.palette.lightFill.main,
  },
  topbarHeading: {
    fontWeight: 'bold',
    fontSize: '0.9vw',
    [theme.breakpoints.down('md')]: {
      // fontSize:'14px'
    },
  },
  messagesWrapper: {
    gridArea: 'messages',
    display: 'flex',
    textAlign: 'start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  nextWrapper: {
    gridArea: 'next',
    display: 'flex',
    textAlign: 'start',
  },
  serviceDate: {
    fontSize: '1vw',
  },
  topbarBusiness: {
    fontSize: '0.85vw',
  },
  avatarWrapper: {
    gridArea: 'avatar',
    display: 'flex',
    textAlign: 'start',
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    fontSize: '1.2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  avatarTopBar: {
    color: 'red',
    width: '2vw',
    height: '2vw',
    marginRight: '0.5vw',
  },
  flex: {
    display: 'flex',
    textAlign: 'start',
  },
  category: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
  },
  catHeading: {
    fontWeight: 'bold',
  },
  navText: {
    paddingLeft: theme.spacing(1),
    // color:theme.palette.fontPrimary.main
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: `${theme.spacing(3)}px 0px`,
  },
  mobileView: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
  desktopView: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Index = ({ LOGOUT = null, children, type, customer, cleanerInfo }) => {
  const classes = useStyles();
  const [open] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openPopper = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.mobileView}
            href="/"
            variant="body2"
            style={{ textDecoration: 'none', gridArea: 'logo' }}
          >
            <img
              alt=""
              src="http://app.wandcleaning.pro/wandBluefav.png"
              width="30px"
              style={{ paddingRight: '4px' }}
            />
            {/* <img width='80px' alt='' src='wordcyan.png'/> */}
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.icon} />
            </div>
            <InputBase
              placeholder="Search Anything…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.messagesWrapper}>
            <EmailIcon className={classes.icon} />
            <div className={classes.desktopView}>
              <Typography variant="body1" className={classes.topbarHeading}>
                Your Messages
              </Typography>
            </div>
          </div>
          <div
            className={clsx(classes.avatarWrapper, classes.desktopView)}
            onClick={handleClick}
          >
            <Avatar
              src={customer?.pic ? `${customer.pic.url}` : 'employee.png'}
              className={classes.avatarTopBar}
            />
            :
            <div>
              <Typography variant="body1" className={classes.topbarHeading}>
                {type === 'customer'
                  ? customer?.firstName
                  : cleanerInfo?.firstName}
              </Typography>
              <Typography variant="body2" className={classes.topbarBusiness}>
                {type === 'customer'
                  ? customer?.companyName
                  : cleanerInfo?.business.cleaningService}
              </Typography>
            </div>
            <Popper
              id={id}
              open={openPopper}
              anchorEl={anchorEl}
              style={{ zIndex: 1202 }}
            >
              <div className={classes.paper}>
                <Button variant="outlined" onClick={() => LOGOUT()}>
                  LogOut
                </Button>
              </div>
            </Popper>
          </div>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'right',
              gridArea: 'menu',
              display: { sm: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   type:state.auth.user.role.name,
//   cleanerInfo:state.order.cleanerInfo,
//   customer:state.auth.user.customer,
//   nextService:state.order.nextService
// });

// export default connect(
//   mapStateToProps,
//   {LOGOUT,NEXT_SERVICE}
//   )(Index);

export default Index;