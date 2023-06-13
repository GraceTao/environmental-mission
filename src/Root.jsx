import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.jsx';
import Home from './homepage/Home.jsx';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default Root;