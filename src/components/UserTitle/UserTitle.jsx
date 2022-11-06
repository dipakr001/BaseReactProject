import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const listItemStyle = {
  bgcolor: '#F5F6F8',
  px: 1.5,
  py: 0.5,
  mb: 2,
  ml: 2,
  width: '88%',
  borderRadius: '10px',
};

const listAvatarStyle = { minWidth: '46px' };
const listItemTypographyStyle = { fontWeight: 700 };

export function UserTitle() {
  return (
    <List>
      <ListItem sx={listItemStyle}>
        <ListItemAvatar sx={listAvatarStyle}>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography type="subtitle1" sx={listItemTypographyStyle}>
              Carlota Monterio
            </Typography>
          }
          secondary="Admin"
        />
      </ListItem>
    </List>
  );
}
