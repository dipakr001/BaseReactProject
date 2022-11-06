import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const pageLoaderContainerStyle = {
  display: 'flex',
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgb(0 0 0 / 75%)',
  zIndex: 99999,
};

export function PageLoader() {
  return (
    <Box sx={pageLoaderContainerStyle}>
      <CircularProgress size={70} />
    </Box>
  );
}
