import { alpha, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#67e8f9',
      light: '#c4fbff',
      dark: '#0ea5c6',
    },
    secondary: {
      main: '#7c3aed',
    },
    background: {
      default: '#050816',
      paper: '#0b1229',
    },
    text: {
      primary: '#eff6ff',
      secondary: '#9fb2d9',
    },
    divider: alpha('#8ec5ff', 0.14),
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 800,
      letterSpacing: '0.08em',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.06em',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.08em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050816',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(17, 132, 255, 0.20), transparent 26%), radial-gradient(circle at 80% 18%, rgba(124, 58, 237, 0.18), transparent 22%), radial-gradient(circle at 50% 80%, rgba(22, 244, 208, 0.10), transparent 24%), linear-gradient(180deg, #050816 0%, #081021 48%, #04070f 100%)',
          overflowX: 'hidden',
        },
        '::selection': {
          backgroundColor: alpha('#67e8f9', 0.35),
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          paddingInline: 22,
          paddingBlock: 12,
          transition: 'transform 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          border: `1px solid ${alpha('#89c7ff', 0.12)}`,
          boxShadow: 'none',
          clipPath:
            'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          letterSpacing: '0.04em',
          backgroundColor: 'transparent',
          border: `1px solid ${alpha('#89c7ff', 0.18)}`,
        },
      },
    },
  },
})

export default theme
