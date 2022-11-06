import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { UserIcon } from 'components/Icons';
import Banner from 'assets/square-risk-web-banner.png';
import logo from 'assets/square-risk-logo.png';

const backgroundArchStyle = {
  width: '200px',
  height: '200px',
  border: '60px solid #FAC48B',
  borderRadius: '50%',
  position: 'fixed',
  left: '-100px',
  bottom: '-100px',
  zIndex: '-1',
};

const backgroundStyle = {
  backgroundImage: `url(${Banner})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '60% auto',
  backgroundAttachment: 'fixed',
  backgroundPosition: '122% -900%',
  position: 'absolute',
  height: '100%',
  width: '100%',
};

export function AuthLayout(props) {
  const navigate = useNavigate();
  const { children, buttonTitle, buttonAction, bgNone } = props;
  const [iconColor, setIconColor] = useState('black');
  const onNaviagate = (link) => {
    navigate(link);
  };

  return (
    <Box sx={bgNone ? { background: 'none' } : backgroundStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={2} maxWidth="lg">
          <Grid item xs={12}>
            <Box
              sx={{
                py: 2,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Square Risk Logo"
                  width={130}
                  height={44}
                />
              </Link>
              <Button
                onMouseEnter={() => {
                  setIconColor('white');
                }}
                onMouseLeave={() => {
                  setIconColor('black');
                }}
                startIcon={<UserIcon stroke={iconColor} />}
                variant="secondary"
                onClick={() => onNaviagate(buttonAction)}
              >
                {buttonTitle}
              </Button>
            </Box>
          </Grid>
          {children}
        </Grid>
        <Box sx={backgroundArchStyle} />
      </Container>
    </Box>
  );
}

AuthLayout.defaultProps = { children: () => {} };

AuthLayout.propTypes = {
  children: PropTypes.node,
  buttonTitle: PropTypes.string,
  buttonAction: PropTypes.string,
  bgNone: PropTypes.bool,
};
