import React from 'react';

import { Box, Button, Chip } from '@mui/material';
import { EnhancedTable, OptionMenu } from 'components';

function createData([name, insuStatus, coverage]) {
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
        Copy Link
      </Button>
      <Button variant="outlined" size="small" sx={{ mr: 1 }}>
        View
      </Button>
      <OptionMenu options={['Edit', 'Delete']} />
    </Box>
  );
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
      label: 'PROGRAM NAME',
    },
    {
      id: 'status',
      numeric: false,
      disablePadding: false,
      label: 'PROGRAM STATUS',
    },
    {
      id: 'coverage',
      numeric: false,
      disablePadding: false,
      label: 'APPLICATION VERSION',
    },
    {
      id: 'action',
      numeric: true,
      disablePadding: false,
      label: 'ACTIONS',
    },
  ],
  data: [
    ['Health Insurance', 'Active', '2.0'],
    ['Motor Insurance', 'Active', '1.0'],
    ['Home Insurance', 'Inactive', '1.1'],
  ],
};

const rows = [];
tableData.data.map((data) => rows.push(createData(data)));

export default function ApplicationsPage() {
  return <EnhancedTable tableData={tableData} rows={rows} />;
}
