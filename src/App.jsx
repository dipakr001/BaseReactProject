import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'theme';
import { appRouter } from 'routes/appRoute';
import { store } from './redux';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={appRouter} />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
