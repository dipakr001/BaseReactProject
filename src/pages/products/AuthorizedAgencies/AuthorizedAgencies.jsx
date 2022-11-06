import React from 'react';

import { Box, Button, Chip } from '@mui/material';
import { EnhancedTable, OptionMenu } from 'components';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/modules';
import { modalId, NewAgency } from './NewAgency';

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
  const color = insuStatus === 'Enabled' ? 'success' : 'warning';
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
      label: 'AGENCY NAME',
    },
    {
      id: 'product',
      numeric: false,
      disablePadding: false,
      label: 'AUTHORIZED PRODUCT',
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
    ['Acuity Insurance', 'Health Insurance', 'Enabled', '2.0'],
    ['Merchants Insurance Group', 'Life Insurance', 'Enabled', '1.0'],
    ['21st Century Insurance', 'Travel Insurance', 'Disabled', '1.1'],
  ],
};

const rows = [];
tableData.data.map((data) => rows.push(createData(data)));

export default function AuthorizedAgenciesPage() {
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
      <NewAgency />
    </>
  );
}
