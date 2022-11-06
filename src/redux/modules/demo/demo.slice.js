import { createSlice } from '@reduxjs/toolkit';

export const initialDemoState = { status: 'loading' };

// Demo Redux Slice
export const demoSlice = createSlice({
  name: 'demo',
  initialState: initialDemoState,
  reducers: {
    getDemo() {},
    setDemo(state, action) {
      const newState = action.payload;
      return newState;
    },
  },
});

export const { getDemo, setDemo } = demoSlice.actions;

export const selectDemoState = (state) => state.demo;
