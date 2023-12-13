import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import './styles.scss';
import './PhaserGame';
import muiTheme from './muiTheme';
import store from './stores';
import App from './app/app';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
