import * as React from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Grow from '@mui/material/Grow';
import { ModalTitle } from './ModalTitle';

const CustomModal = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: 0,
  },
  '& .MuiDialogActions-root': { padding: theme.spacing(3) },
  '& .MuiPaper-root': { borderRadius: 8 },
}));

const Transition = React.forwardRef((props, ref) => (
  <Grow ref={ref} {...props} />
));

export function Modal({ open, onClose, title, content, action, ...props }) {
  return (
    <CustomModal
      onClose={onClose}
      TransitionComponent={Transition}
      open={open}
      {...props}
    >
      <ModalTitle id="customized-dialog-title" onClose={onClose}>
        {title}
      </ModalTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{action}</DialogActions>
    </CustomModal>
  );
}
