import React, { useEffect, useState } from 'react';
import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalState, closeModal } from 'redux/modules';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

export const modalId = 'new-proposal-modal';

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

const mga = [
  {
    value: '1',
    label: 'CCC Pvt.',
  },
  {
    value: '2',
    label: 'CBB INC',
  },
  {
    value: '3',
    label: '20st Secure Pvt Ltd',
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

export function NewProposal() {
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
          label="Product"
          {...register('product')}
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
          select
          label="MGA"
          {...register('mga')}
          variant="outlined"
        >
          {mga.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          label="Proposal Field Name"
          {...register('proposal')}
          variant="outlined"
        />
      </FormControl>

      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mb: 0 }}>
          Section Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="table"
            control={<Radio size="small" />}
            label="Table"
          />
          <FormControlLabel
            value="form"
            control={<Radio size="small" />}
            label="Form Field"
          />
          <FormControlLabel
            value="text"
            control={<Radio size="small" />}
            label="Text"
          />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          label="Title"
          {...register('title')}
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          label="Column Names"
          {...register('columnName')}
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <TextField
          size="small"
          label="Selected Column"
          {...register('columnSelected')}
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
      title="New Proposal Field"
      content={formContent()}
      fullWidth
      maxWidth="xs"
      action={modalAction()}
    />
  );
}
