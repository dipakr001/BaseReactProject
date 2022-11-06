import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  FormControl,
  TextField,
  Box,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from 'sections/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {
  getInstance,
  getSignup,
  selectInstanceState,
  selectSignUpState,
} from 'redux/modules/config';
import { useForm } from 'react-hook-form';
import { PasswordFiled } from 'components';

export function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const instanceState = useSelector(selectInstanceState);
  const signUpState = useSelector(selectSignUpState);
  const { register, handleSubmit } = useForm();

  const [activeType, setActiveType] = useState();
  const [password, setPassword] = useState('');

  const onSubmit = (data) => {
    const formData = data;
    formData.businessType = activeType.companyTypeId;
    formData.password = password;
    console.log(formData);
    dispatch(getSignup(formData));
  };

  useEffect(() => {
    dispatch(getInstance());
  }, []);

  useEffect(() => {
    if (instanceState && instanceState.length > 0) {
      setActiveType(instanceState[0]);
    }
  }, [instanceState]);

  useEffect(() => {
    if (signUpState.status === 'redirect') {
      navigate(signUpState.redirect);
    }
  }, [signUpState]);

  return (
    <AuthLayout buttonTitle="Sign In" buttonAction="/login">
      <Grid item xs={12} md={5} sx={{ mt: 4 }}>
        <Typography variant="h4">
          <strong>Join</strong> our network for free
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
          Business Type
        </Typography>
        <Grid container spacing={2} sx={{ display: 'inline-flex', mb: 2 }}>
          {instanceState &&
            instanceState.map((val) => (
              <Grid item key={`${val.companyTypeId}`}>
                <Button
                  variant="outlined"
                  sx={{ p: 1 }}
                  onClick={() => setActiveType(val)}
                >
                  <img
                    src={
                      activeType?.name === val.name
                        ? val.activeUrl
                        : val.inActiveUrl
                    }
                    alt={val.name}
                  />
                </Button>
                <Typography sx={{ textAlign: 'center' }} variant="body2">
                  {`${val.name}`}
                </Typography>
              </Grid>
            ))}
        </Grid>
        <Box sx={{ mb: 2, display: 'flex' }}>
          <FormControl fullWidth variant="outlined" sx={{ mr: 1 }}>
            <TextField
              {...register('firstName')}
              label="First Name"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" sx={{ ml: 1 }}>
            <TextField
              {...register('lastName')}
              label="Last Name"
              variant="outlined"
            />
          </FormControl>
        </Box>
        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <TextField
            {...register('businessName')}
            label="Business Name"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <TextField {...register('email')} label="Email" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <PasswordFiled onChange={setPassword} />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="primary"
            size="large"
            sx={{ p: 2 }}
          >
            Join network
          </Button>
        </FormControl>
        <Typography variant="subTitle2">
          Already have an account? <Link to="/login">Sign In</Link>
        </Typography>
      </Grid>
    </AuthLayout>
  );
}
