import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Products from 'assets/nav-icons/products.svg';
import Agencies from 'assets/nav-icons/agencies.svg';
import MGAs from 'assets/nav-icons/mgas.svg';
import Quote from 'assets/nav-icons/quotes.svg';
import Updates from 'assets/nav-icons/updates.svg';
import Users from 'assets/nav-icons/users.svg';

const navigation = [
  {
    title: 'Products',
    icon: Products,
  },
  {
    title: 'Agencies',
    icon: Agencies,
  },
  {
    title: 'MGAs',
    icon: MGAs,
  },
  {
    title: 'Quote Requests',
    icon: Quote,
  },
  {
    title: 'Network Updates',
    icon: Updates,
  },
  {
    title: 'User Access',
    icon: Users,
  },
];

export function NavBar() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <Typography variant="subtitle2" sx={{ ml: 2, fontWeight: 700 }}>
        MAIN MENU
      </Typography>
      <List>
        {navigation.map((nav) => (
          <ListItem key={`key--${nav.title}`} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <img src={nav.icon} alt={nav.title} />
              </ListItemIcon>
              <ListItemText primary={nav.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
