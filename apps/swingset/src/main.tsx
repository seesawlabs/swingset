import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './app/app';
const theme = {
  primary: 'pink',
  secondary: 'yellow',
  components: {
    Card: {
      Header: {
        margin: 'xl',
      },
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
