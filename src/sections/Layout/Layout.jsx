import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';
import { lightGreyColor } from 'theme';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function Layout({ children }) {
  return (
    <Grid container sx={{ background: lightGreyColor }}>
      <Grid item md={2} xs={3}>
        <NavigationBar />
      </Grid>
      {children}
    </Grid>
  );
}

Layout.defaultProps = { children: () => {} };

Layout.propTypes = { children: PropTypes.node };
