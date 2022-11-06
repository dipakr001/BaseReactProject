import React from 'react';

import { EnhancedTable, OptionMenu } from 'components';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/modules';
import { NewProposal, modalId } from './NewProposal';

function createData([name, mga, proposal]) {
  const getActions = () => <OptionMenu options={['Edit', 'Delete']} />;

  const action = getActions();
  return {
    name,
    mga,
    proposal,
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
      id: 'mga',
      numeric: false,
      disablePadding: false,
      label: 'MGA NAME',
    },
    {
      id: 'proposal',
      numeric: false,
      disablePadding: false,
      label: 'PROPOSAL FIELD',
    },
    {
      id: 'action',
      numeric: false,
      disablePadding: false,
      label: 'ACTIONS',
    },
  ],
  data: [
    ['Health Insurance', 'WeInsure', 'General Liability'],
    ['Life Insurance', 'Heaven Life', 'Property'],
    ['Travel Insurance', 'Berkshire Hathways', 'Product Liability'],
  ],
};

const rows = [];
tableData.data.map((data) => rows.push(createData(data)));

export default function ProposalsPage() {
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
      <NewProposal />
    </>
  );
}
