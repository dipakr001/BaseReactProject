import React from 'react';

import { Container, Drawer, Toolbar } from '@mui/material';

import { NavBar, UserTitle } from 'components';
import logo from 'assets/square-risk-logo.png';

const drawerWidth = 240;
const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRadius: '0 4px 4px 0',
  },
};

export function NavigationBar() {
  return (
    <Container>
      <Drawer sx={drawerStyle} variant="permanent" anchor="left">
        <Toolbar sx={{ py: 2 }}>
          <img src={logo} alt="Square Risk Logo" width={130} height={44} />
        </Toolbar>
        <UserTitle />
        <NavBar />
      </Drawer>
    </Container>
  );
}
