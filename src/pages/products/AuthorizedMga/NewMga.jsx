import React, { useEffect, useState } from 'react';
import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalState, closeModal } from 'redux/modules';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';

export const modalId = 'new-authorized-mga-modal';

const status = [
  {
    value: 'active',
    label: 'Active',
  },
  {
    value: 'inactive',
    label: 'Inactive',
  },
];

const agencies = [
  {
    value: '1',
    label: 'Acuity Insurance',
  },
  {
    value: '2',
    label: 'Merchants Insurance Group',
  },
  {
    value: '3',
    label: '21st Century Insurance',
  },
];

const products = [
  {
    value: '11',
    label: 'Health Insurance',
  },
  {
    value: '12',
    label: 'Life Insurance',
  },
  {
    value: '12',
    label: 'Travel Insurance',
  },
];

export function NewMgas() {
  const dispatch = useDispatch();

  const modalState = useSelector(selectModalState);
  const { register, handleSubmit } = useForm();

  const [open, setOpen] = useState(false);

  const onSubmit = (data) => console.log(data);

  const handleClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (modalState && modalState.modalId === modalId) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [modalState]);

  const formContent = () => (
    <Box component="form" sx={{ '& .MuiTextField-root': { mt: 1, mb: 1 } }}>
      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          select
          label="MGA"
          {...register('name')}
          variant="outlined"
        >
          {agencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          select
          label="Product"
          {...register('authorizedIndustries')}
          variant="outlined"
        >
          {products.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          label="Autherised States"
          {...register('authorizedIndustries')}
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          select
          label="Status"
          {...register('status')}
          variant="outlined"
        >
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
  const modalAction = () => (
    <>
      <Button
        onClick={handleClose}
        variant="secondary"
        sx={{ minWidth: '100px' }}
      >
        Cancel
      </Button>
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="primary"
        sx={{ minWidth: '100px' }}
      >
        Add
      </Button>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="New MGA"
      content={formContent()}
      fullWidth
      maxWidth="xs"
      action={modalAction()}
    />
  );
}
