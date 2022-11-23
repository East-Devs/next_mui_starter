import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { pxToRem } from './util';

function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    '@media (max-width:1536px)': {
      fontSize: pxToRem(lg),
    },
    '@media (max-width:1200px)': {
      fontSize: pxToRem(md),
    },
    '@media (max-width:900px)': {
      fontSize: pxToRem(sm),
    },
    '@media (max-width: 600px)': {
      fontSize: pxToRem(xs),
    },
  };
}

const light = createTheme({
  typography: {
    fontFamily: ['sans-serif', 'Montserrat'],
    h1: {
      ...responsiveFontSizes({ xs: 30, sm: 35, md: 40, lg: 44 }),
    },
    h2: {
      ...responsiveFontSizes({ xs: 25, sm: 30, md: 35, xl: 40 }),
    },
    h5: {
      fontSize: '24px',
    },
    body1: {
      fontSize: '20px',
    },
    body2: {
      fontSize: '16px',
    },
    subtitle1: {
      fontSize: '12px',
    },
    subtitle2: {
      fontSize: '10px',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4481DB',
    },
    secondary: {
      main: '#376fd0',
    },
    ternary: {
      main: '#002f79',
    },
    fontPrimary: {
      main: '#000000',
    },
    fontSecondary: {
      main: '#eee',
    },
    lightFill: {
      main: 'rgb(238, 238, 238)',
    },
    lightishFill: {
      main: 'rgba(238, 238, 238,0.5)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#D5E8FE',
      v1: '#C1DCF9',
      v2: '#B2D1F2',
      smallCard: '#E1EEFD',
      blurGrey: '#BFC4CC',
    },
  },
});

const dark = createTheme({
  typography: {
    fontFamily: [
      'Urbanist',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial, sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00C5C8',
      light: '#002222',
      lightDark: '#d1d1d1',
      dark: '#00C5C8',
      active: '#0BC7CA10',
    },
    secondary: {
      main: '#376fd0',
    },
    ternary: {
      main: '#002f79',
    },
    fontPrimary: {
      main: '#005051',
    },
    fontSecondary: {
      main: '#eee',
    },
    lightFill: {
      main: 'rgb(238, 238, 238)',
    },
    lightishFill: {
      main: 'rgba(238, 238, 238,0.5)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
    },
    backgroundSecondary: {
      default: '#2a2a2a',
    },
  },
});

const { breakpoints, palette } = light;

const overrides = {
  MuiContainer: {
    root: {
      paddingRight: '0rem',
      paddingLeft: '0rem',
    },
  },
  MuiButton: {
    root: {
      margin: '0.2rem',
      fontSize: '0.9rem',
      [breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    endIcon: {
      marginLeft: '13px',
      [breakpoints.down('sm')]: {
        marginLeft: '5px',
      },
    },
  },
  MuiIconButton: {
    root: {
      padding: '0.1rem',
    },
  },

  MuiInputBase: {
    root: {
      [breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
  MuiOutlinedInput: {
    root: {
      // border:'none',
      boxShadow: 'rgba(149, 157, 165, 0.01) 0px 4px 6px',
    },
    notchedOutline: {
      // border:'none',
      boxShadow: 'rgba(149, 157, 165, 0.01) 0px 4px 6px',
    },
  },
};

export const lightTheme = {
  ...light,
  overrides: {
    ...overrides,
    MuiAppBar: {
      colorPrimary: {
        color: 'rgb(158, 158, 158)',
        backgroundColor: 'white',
      },
    },
    MuiTableHead: {
      root: {
        background: '#F2FCFC',
      },
    },
    MuiButton: {
      containedSecondary: {
        backgroundColor: 'rgb(244, 67, 54)',
      },
    },
    MuiSvgIcon: {
      root: {
        fill: palette.fontPrimary.main,
      },
      colorSecondary: {
        color: 'rgb(244, 67, 54)',
      },
    },
    MuiInputLabel: {
      animated: {
        fontWeight: 'bold',
        color: palette.primary.lightDark,
      },
      outlined: {
        zIndex: '0',
      },
    },
    MuiInput: {
      underline: {
        '&::before': {
          color: palette.primary.lightDark,
        },
      },
    },
    MuiSelect: {
      select: {
        textAlign: 'start',
        color: palette.primary.lightDark,
      },
    },
    MuiTableCell: {
      root: {
        padding: '1.5rem 0.5rem',
        fontSize: '1.2rem',
        color: palette.primary.lightDark,
      },
    },
  },
};

export const darkTheme = {
  ...dark,
  overrides: { ...overrides },
};

export default lightTheme;
