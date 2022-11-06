import React from 'react';

import { Box, Button, Chip } from '@mui/material';
import { EnhancedTable, OptionMenu } from 'components';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/modules';
import { NewMgas, modalId } from './NewMga';

function createData([name, product, insuStatus]) {
  const getStatus = (title, color) => (
    <Chip label={title} color={color} size="small" />
  );

  const getActions = () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Button variant="outlined" size="small" sx={{ mr: 1 }}>
        Button 1
      </Button>
      <Button variant="outlined" size="small" sx={{ mr: 1 }}>
        Button 2
      </Button>
      <OptionMenu options={['Edit', 'Delete']} />
    </Box>
  );
  const color = insuStatus === 'Active' ? 'success' : 'warning';
  const status = getStatus(insuStatus, color);
  const action = getActions();
  return {
    name,
    product,
    status,
    action,
  };
}

const tableData = {
  header: [
    {
      id: 'name',
      numeric: false,
      disablePadding: false,
      label: 'MGA NAME',
    },
    {
      id: 'product',
      numeric: false,
      disablePadding: false,
      label: 'ASSOCIATED PRODUCT',
    },
    {
      id: 'status',
      numeric: false,
      disablePadding: false,
      label: 'STATUS',
    },
    {
      id: 'action',
      numeric: true,
      disablePadding: false,
      label: 'ACTIONS',
    },
  ],
  data: [
    ['WeInsure', 'Health Insurance', 'Active'],
    ['Heaven Life', 'Life Insurance', 'Active'],
    ['Berkshire Hathways', 'Travel Insurance', 'Inactive'],
  ],
};

const rows = [];
tableData.data.map((data) => rows.push(createData(data)));

export default function AuthorizedMgaPage() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ modalId }));
  };
  return (
    <>
      <EnhancedTable
        tableData={tableData}
        rows={rows}
        handleAddButton={handleOpenModal}
      />
      <NewMgas />
    </>
  );
}
