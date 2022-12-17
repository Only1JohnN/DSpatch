import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto', 'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(','),

    h3: {
      fontWeight: '600',

      '@media (max-width: 900px)': {
        fontSize: '28px',
      }
    },
    
    h4: {
      fontWeight: '500',
    },

    subtitle2: {
      fontWeight: '400',
      // fontSize: '12px',
      lineHeight: '18px',
    },
  },
});

theme.typography.body1 = {
  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '22px',
  
  [theme.breakpoints.up('md')]: {
    lineHeight: '33px',
    fontSize: '22px',
  }
};

export default theme;