import React from 'react';
import {
  Box,
  Button,
  alpha,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import PropTypes from 'prop-types';

import AddIcon from '@mui/icons-material/Add';

function EnhancedTableToolbar(props) {
  const { numSelected, handleAddButton } = props;

  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pl: { sm: 2 },
        pr: { xs: 2, sm: 2 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      <Typography id="tableTitle" component="div">
        Showing <strong>8</strong> of <strong>30</strong>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          variant="primary"
          size="small"
          endIcon={<AddIcon />}
          sx={{
            mr: 1,
            color: '#fff',
            fontWeight: '600',
          }}
          onClick={handleAddButton}
        >
          Add New
        </Button>

        <Tooltip title="Filter list">
          <>
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <Typography variant="subtitle1" component="h6">
              FILTER
            </Typography>
          </>
        </Tooltip>
      </Box>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = { numSelected: PropTypes.node };

export default EnhancedTableToolbar;
