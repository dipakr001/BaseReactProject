import React from 'react';

import { Box, Button, Chip } from '@mui/material';
import { EnhancedTable, OptionMenu } from 'components';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/modules';
import { modalId, NewProduct } from './NewProduct';

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
      Button Label
    </Button>
    <OptionMenu options={['Edit', 'Delete']} />
  </Box>
);

function createData([name, coverage, insuStatus]) {
  const color = insuStatus === 'Active' ? 'success' : 'warning';
  const status = getStatus(insuStatus, color);
  const action = getActions();
  return {
    name,
    coverage,
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
      label: 'PRODUCTS NAME',
    },
    {
      id: 'coverage',
      numeric: false,
      disablePadding: false,
      label: 'COVERAGE TYPE',
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
      align: 'right',
    },
  ],
  data: [
    ['Health Insurance', 'Life, Health', 'Active', 67],
    ['Motor Insurance', 'Long Term, Damage', 'Active', 51],
    ['Home Insurance', 'Damage, Life', 'Active', 24],
    ['Fire Insurance', 'Life, Health, Damage', 'Active', 49],
    ['Travel Insurance', 'Long Term, Health, Life', 'Active', 87],
    ['Term Life Insurance', 'Long Term, Health', 'Inactive', 37],
    ['Whole Life Insurance', 'Life, Health, Long Term', 'Active', 94],
    ['Child Plans', 'Life, Health', 'Inactive', 65],
    ['Senior Citizen Insurance', 'Life, Health', 'Inactive', 98],
    ['Life Insurance', 'Life, Health, Long Term', 'Inactive', 2.1],
  ],
};

const rows = [];
tableData.data.map((data) => rows.push(createData(data)));

export default function ProgramsPage() {
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
      <NewProduct />
    </>
  );
}
