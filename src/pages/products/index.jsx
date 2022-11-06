import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Box, Grid, Tab, Tabs, Container } from '@mui/material';
import { Layout } from 'sections/Layout';

const mainTabData = [
  {
    index: 0,
    title: 'all',
    route: '/products',
  },
  {
    index: 1,
    title: 'Applications',
    route: '/products/applications',
  },
  {
    index: 2,
    title: 'Authorized Agencies',
    route: '/products/authorized-agencies',
  },
  {
    index: 3,
    title: 'Authorized MGAs',
    route: '/products/authorized-mga',
  },
  {
    index: 4,
    title: 'Commissions',
    route: '/products/commissions',
  },
  {
    index: 5,
    title: 'Proposal Templates',
    route: '/products/proposals',
  },
];

function a11yProps(index) {
  return {
    id: `main-tab-${index}`,
    'aria-controls': `main-tabpanel-${index}`,
  };
}

export function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    const filterTabData = mainTabData.filter(
      (ftd) => ftd.index === newValue,
    )[0];
    navigate(filterTabData.route);
  };

  useEffect(() => {
    if (location.pathname) {
      const filterTabData = mainTabData.filter(
        (ftd) => ftd.route === location.pathname,
      )[0];
      setValue(filterTabData.index);
    }
  }, [location]);

  return (
    <Layout>
      <Grid item md={10} sm={9} sx={{ minHeight: '100vh' }}>
        <Container maxWidth="xl" sx={{ pt: 2 }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
            component="main"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="square risk tabs"
            >
              {mainTabData.map((td) => (
                <Tab
                  key={`tab-key-${td.index}`}
                  label={td.title}
                  {...a11yProps(td.index)}
                />
              ))}
            </Tabs>
          </Box>
        </Container>
        <Container maxWidth="xl" sx={{ pt: 2 }}>
          <Outlet />
        </Container>
      </Grid>
    </Layout>
  );
}

ProductsPage.defaultProps = { children: () => {} };

ProductsPage.propTypes = { children: PropTypes.node };
