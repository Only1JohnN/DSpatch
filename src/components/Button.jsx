import React from 'react';

// Material imports
import { Button as MUIbtn } from '@mui/material';
import { styled } from '@mui/material/styles';

const Button = styled(MUIbtn)({
  borderRadius: '1px',
  backgroundColor: '#092C4C',
  borderColor: '#092C4C',
  color: '#ffffff',
  padding: '10px 20px',
  textTransform: 'none',
  fontsize: '12px',
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

  '&:hover': {
    backgroundColor: '#1E429F',
    borderColor: '#1E429F',
  },
})

export default Button