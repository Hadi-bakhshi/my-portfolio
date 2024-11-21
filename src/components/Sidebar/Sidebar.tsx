import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Fragment, useState } from 'react';
import { SidebarProps } from './Sidebar.types';
import { SidebarLeftIcon } from '../Icons/General';
import Link from 'next/link';
import { IconButton } from '@mui/material';

export default function Sidebar(props: SidebarProps) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, ['left']: open });
  };

  const list = () => (
    <Box sx={{ width: 200 }} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {props.list?.map((item, index) => (
          <Link
            key={index}
            href={item.name !== 'Home' ? `#${item.name}` : ''}
            style={{ color: 'var(--mui-palette-action-active)', textDecoration: 'none' }}
          >
            <ListItem
              disablePadding
              // sx={{ color: 'inherit' }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <IconButton color='primary' onClick={toggleDrawer(true)} sx={{ marginLeft: '1rem' }}>
            <SidebarLeftIcon color='inherit' />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
