import React from "react";

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
  Link,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// React-Router-Dom
import { Link as RouterLink } from "react-router-dom";

// Assets
import theme from "../assets/theme";
import { Logo } from "../assets";

import { Button as Btn } from "./index";

const drawerWidth = 240;
const navItems = ["Company", "Tracking", "Partner with DSpatch", "Safety", "Support", "Help"];

const Navbar = (props) => {
  const trigger = useScrollTrigger();
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo style={{ width: "80%" }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center" }}>
          <Btn
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "#092C4C",

              "$:hover": {
                color: "#ffffff",
              },
            }}
            variant='outlined'
          >
            Sign In
          </Btn>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Btn>Sign Up</Btn>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box display='flex'>
        <AppBar
          component='nav'
          sx={{
            color: "#092C4C",
            backgroundColor: "#ffffff",
            px: { xs: 0.5, md: 15 },
            py: 1,
            alignItems: "center",
          }}
          position='fixed'
          elevation={trigger ? 4 : 0}
        >
          <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
            <Link component={RouterLink} to='/' underline='none'>
              <Logo style={{ width: "150px", height: "85px" }} />
            </Link>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Link
                  component={RouterLink}
                  to={item.toLowerCase()}
                  underline='none'
                  key={index}
                  color='#092C4C'
                  sx={{ mx: { md: "10px" }, "&:hover": { color: "#F2994A" } }}
                >
                  {item}
                </Link>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Btn
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "#092C4C",
                  marginRight: "10px",
                  fontSize: "12px",

                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
                variant='outlined'
              >
                Sign In
              </Btn>

              <Btn sx={{ fontSize: 12 }}>Sign Up</Btn>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor='right'
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Toolbar />
    </ThemeProvider>
  );
};

export default Navbar;
