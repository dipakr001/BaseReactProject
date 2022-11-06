import { createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://ec2-13-126-7-216.ap-south-1.compute.amazonaws.com/api';

export const initialConfigState = {
  status: 'loading',
  apiKey: 'bac87873a53869e58c0622ac74e9015046084d4f',
  apiUrls: {
    getInstance: `${API_URL}/config/get-instance`,
    signUp: `${API_URL}/onboarding/signup`,
    loginIn: '',
  },
  instance: [],
  signUpDetails: {
    status: 'pending',
    redirect: 'login',
  },
};

// Config Redux Slice
export const configSlice = createSlice({
  name: 'config',
  initialState: initialConfigState,
  reducers: {
    getInstance() {},
    setInstance(state, action) {
      const newState = { ...state, ...{ instance: action.payload } };
      return newState;
    },
    getSignup() {},
    setSignup(state, action) {
      const newState = { ...state, ...{ signUpDetails: action.payload } };
      return newState;
    },
    resetConfig() {
      return initialConfigState;
    },
  },
});

export const { getInstance, setInstance, getSignup, setSignup, resetConfig } =
  configSlice.actions;

export const selectConfigState = (state) => state.config;
export const selectInstanceState = (state) => state.config?.instance;
export const selectSignUpState = (state) => state.config?.signUpDetails;
