import React from 'react';
import {
  Button,
  Grid,
  Typography,
  FormControl,
  TextField,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { PasswordFiled } from 'components';
import { AuthLayout } from 'sections/Layout';

export function LoginPage() {
  const navigate = useNavigate();
  const signInAction = () => {
    navigate('/products');
  };

  return (
    <AuthLayout buttonTitle="Join Our Network" buttonAction="/sign-up">
      <Grid item xs={12} md={5} sx={{ mt: 12 }}>
        <Typography variant="h4">
          <strong>Accelerating</strong> Speciality Insurance Distribution
        </Typography>
        <FormControl fullWidth sx={{ mt: 6, mb: 2 }} variant="outlined">
          <TextField id="email" label="Email" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <PasswordFiled />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <Button
            variant="primary"
            sx={{ p: 2 }}
            onClick={() => signInAction()}
          >
            Sign In
          </Button>
        </FormControl>
        <Typography variant="subTitle2">
          Don&#39;t have an account?&nbsp;
          <Link to="/sign-up">Join Our Network</Link>
        </Typography>
      </Grid>
    </AuthLayout>
  );
}
