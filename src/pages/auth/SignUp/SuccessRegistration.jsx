import { Grid, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetConfig } from 'redux/modules/config';
import { AuthLayout } from 'sections/Layout';
import Success from 'assets/success.gif';

export default function SuccessRegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  useEffect(() => {
    dispatch(resetConfig());
  }, []);
  return (
    <AuthLayout buttonTitle="Sign In" buttonAction="/login" bgNone>
      <Grid
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        container
        spacing={2}
        maxWidth="lg"
        sx={{ height: '100vh' }}
      >
        <img src={Success} alt="success" />
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          <strong>Regisration Successfull</strong>
        </Typography>

        <Typography sx={{ mt: 2 }} variant="caption">
          Our team will be reaching out to you to initiate your on-boarding.
        </Typography>

        <Button onClick={handleNavigate} sx={{ mt: 3 }} variant="primary">
          Back to Home
        </Button>
      </Grid>
    </AuthLayout>
  );
}
