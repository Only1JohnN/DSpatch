import React from 'react';

// Material imports
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Assets
import theme from '../assets/theme';
import { Logo } from '../assets';

import { Button as Btn } from './index';

const drawerWidth = 240;
const navItems = [
  'Company',
  'Tracking',
  'Partner with DSpatch',
  'Safety',
  'Support',
  'Help',
];

const Navbar = (props) => {
  const trigger = useScrollTrigger();
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={Logo} alt="DSpatch" style={{ width: '80%', margin: '8% 0' }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center' }}>
          <Btn
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              color: '#092C4C',

              '$:hover': {
                color: '#ffffff'
              }
            }}
            variant="outlined"
          >
            Sign In
          </Btn>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center' }}>
          <Btn>Sign Up</Btn>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <AppBar
          component="nav"
          sx={{
            color: '#092C4C',
            backgroundColor: '#ffffff',
            p: 1.5
          }}
          position='fixed'
          elevation={ trigger ? 4 : 0 }
        >
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <img src={Logo} alt="DSpatch" style={{ width: '25%' }} />
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#092C4C', fontSize: '12px' }}>
                  {item}
                </Button>
              ))}
              <Btn
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  color: '#092C4C',
                  marginRight: '10px',
                  fontSize: '12px',
    
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
                variant="outlined"
              >
                Sign In
              </Btn>
    
              <Btn sx={{ fontSize: 12 }}>Sign Up</Btn>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
      <Toolbar />
    </ThemeProvider>
  )
}

export default Navbar