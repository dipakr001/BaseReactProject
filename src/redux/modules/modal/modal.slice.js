import { createSlice } from '@reduxjs/toolkit';

export const initialModalState = {
  status: 'closed',
  modalId: '',
  data: {},
};

// Modal Redux Slice
export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal(state, action) {
      const newState = { ...state, ...action.payload };
      newState.status = 'open';

      return newState;
    },
    closeModal() {
      return initialModalState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalState = (state) => state.modal;
