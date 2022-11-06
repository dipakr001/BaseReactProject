import React from 'react';

import { Chip } from '@mui/material';
import { EnhancedTable, OptionMenu } from 'components';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/modules';
import { NewCommission, modalId } from './NewCommission';

function createData([name, payer, receiver, commission, insuStatus]) {
  const getStatus = (title, color) => (
    <Chip label={title} color={color} size="small" />
  );

  const getActions = () => <OptionMenu options={['Edit', 'Delete']} />;
  const color = insuStatus === 'Active' ? 'success' : 'warning';
  const status = getStatus(insuStatus, color);
  const action = getActions();
  return {
    name,
    payer,
    receiver,
    commission,
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
      label: 'PRODUCT NAME',
    },
    {
      id: 'payer',
      numeric: false,
      disablePadding: false,
      label: 'PAYER COMPANY',
    },
    {
      id: 'receiver',
      numeric: false,
      disablePadding: false,
      label: 'RECEIVER COMPANY',
    },
    {
      id: 'commission',
      numeric: false,
      disablePadding: false,
      label: 'COMMISSION',
    },
    {
      id: 'status',
      numeric: false,
      disablePadding: false,
      label: 'STATUS',
    },
    {
      id: 'action',
      numeric: false,
      disablePadding: false,
      label: 'ACTIONS',
    },
  ],
  data: [
    ['Health Insurance', 'WeInsure', 'Accuty Insurance', '10%', 'Active'],
    [
      'Life Insurance',
      'Heaven Life',
      'Merchants Insurance Group',
      '12%',
      'Active',
    ],
    [
      'Travel Insurance',
      'Berkshire Hathways',
      '21st Century Insurance',
      '13%',
      'Inactive',
    ],
  ],
};

const rows = [];
tableData.data.map((data) => rows.push(createData(data)));

export default function CommissionsPage() {
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
      <NewCommission />
    </>
  );
}
