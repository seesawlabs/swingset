import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ primary: 'pink', secondary: 'yellow' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
