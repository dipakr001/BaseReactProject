import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import { demoSlice, demoListeners, modalSlice } from './modules';
import { configSlice, configListeners } from './modules/config';

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    [demoSlice.name]: demoSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
    [configSlice.name]: configSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ thunk: false }).prepend(
      listenerMiddleware.middleware,
    ),
  devTools: true,
});

// add all listeners
[...demoListeners, ...configListeners].map((sl) => {
  listenerMiddleware.startListening(sl);

  return true;
});
