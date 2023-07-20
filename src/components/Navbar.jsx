import React, { useState } from "react";

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
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import {
  ArrowDropDown,
  ArrowDropUp,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
} from "@mui/icons-material";
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
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [companyAnchor, setCompanyAnchor] = React.useState(null);
  const [partnersAnchor, setPartnersAnchor] = React.useState(null);
  const companyOpen = Boolean(companyAnchor);
  const partnersOpen = Boolean(partnersAnchor);
  const [companyMobileOpen, setCompanyMobileOpen] = useState(false);
  const [partnersMobileOpen, setPartnersMobileOpen] = useState(false);

  const handleCollapseToggle = (context) => {
    context == "company"
      ? setCompanyMobileOpen(!companyMobileOpen)
      : setPartnersMobileOpen(!partnersMobileOpen);
  };

  const handleDropdownOpen = (event, context) => {
    if (context == "company") {
      setCompanyAnchor(event.currentTarget);
    } else if (context == "partners") {
      setPartnersAnchor(event.currentTarget);
    }
  };

  const handleDropdownClose = () => {
    companyAnchor && setCompanyAnchor(null);
    partnersAnchor && setPartnersAnchor(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Link onClick={handleDrawerToggle} component={RouterLink} to='/' underline='none'>
        <Logo style={{ width: "80%" }} />
      </Link>
      <Divider />
      <List>
        {navItems.map((item, key) => {
          if (item.toLowerCase() == "company") {
            return (
              <div key={key}>
                <ListItem
                  sx={{
                    "& .MuiListItemText-root": {
                      color: "#092C4C",
                    },
                  }}
                  disablePadding
                >
                  <ListItemButton onClick={() => handleCollapseToggle("company")}>
                    <ListItemText primary={item} />
                    {companyMobileOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={companyMobileOpen} timeout='auto' unmountOnExit>
                  <List
                    component='div'
                    sx={{
                      "& .MuiListItemText-root": {
                        color: "#092C4C",
                        pl: 2,
                      },
                    }}
                    disablePadding
                  >
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/about-us'
                      underline='none'
                      divider={true}
                    >
                      <ListItemText primary='About DSpatch' />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/what-we-offer'
                      underline='none'
                      divider={true}
                    >
                      <ListItemText primary='Our Offerings' />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/how-dspatch-works'
                      underline='none'
                      divider={companyMobileOpen ? true : false}
                    >
                      <ListItemText primary='How DSpatch Works' />
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            );
          } else if (item.toLowerCase() == "partner with dspatch") {
            return (
              <div key={key}>
                <ListItem
                  key={key}
                  sx={{
                    "& .MuiListItemText-root": {
                      color: "#092C4C",
                    },
                  }}
                  disablePadding
                >
                  <ListItemButton onClick={() => handleCollapseToggle("partners")}>
                    <ListItemText primary={item} />
                    {partnersMobileOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={partnersMobileOpen} timeout='auto' unmountOnExit>
                  <List
                    component='div'
                    sx={{
                      "& .MuiListItemText-root": {
                        color: "#092C4C",
                        pl: 2,
                      },
                    }}
                    disablePadding
                  >
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/dspatcher'
                      underline='none'
                      divider={true}
                    >
                      <ListItemText primary='DSpatchers' />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/customer'
                      underline='none'
                      divider={true}
                    >
                      <ListItemText primary='Restaurants/Stores' />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/courier'
                      underline='none'
                      divider={true}
                    >
                      <ListItemText primary='Couriers' />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleDrawerToggle()}
                      component={RouterLink}
                      to='/fleet-owner'
                      underline='none'
                      divider={partnersMobileOpen ? true : false}
                    >
                      <ListItemText primary='Fleet Owners' />
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            );
          } else {
            return (
              <ListItem
                component={RouterLink}
                underline='none'
                to={item.toLowerCase()}
                key={key}
                sx={{
                  "& .MuiListItemText-root": {
                    color: "#092C4C",
                  },
                }}
                onClick={handleDrawerToggle}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
        <ListItem sx={{ justifyContent: "center" }}>
          <Btn
            component={RouterLink}
            to='signIn'
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "#092C4C",
              fontSize: "13px",
              borderRadius: "3px",
              border: "1.5px",

              "$:hover": {
                backgroundColor: "#CEDFDB",
              },
            }}
            variant='outlined'
          >
            Sign In
          </Btn>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Btn
            component={RouterLink}
            to='signup'
            sx={{
              fontSize: "13px",
              borderRadius: "3px",
              border: "1.5px",
            }}
          >
            Sign Up
          </Btn>
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
            height: "87px",
            color: "#092C4C",
            backgroundColor: "#ffffff",
            px: { xs: 0.5, md: 15 },
            py: 1,
            alignItems: "center",
          }}
          position='fixed'
          elevation={trigger ? 4 : 0}
        >
          <Toolbar sx={{ justifyContent: { xs: "start", md: "space-between" }, width: "100%" }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link component={RouterLink} to='/' underline='none'>
              <Logo style={{ width: "150px", height: "85px" }} />
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => {
                if (item.toLowerCase() == "company") {
                  return (
                    <span key={index}>
                      <Button
                        endIcon={<ArrowDropDown />}
                        onClick={(event) => handleDropdownOpen(event, "company")}
                        sx={{
                          mx: { md: 0.7 },
                          color: "#092C4C",
                          textTransform: "capitalize",
                          transition: "all .3s ease-in-out",
                          "&:hover": { color: "inherit", backgroundColor: "#F4F4F6" },
                        }}
                      >
                        {item}
                      </Button>

                      <Menu
                        anchorEl={companyAnchor}
                        open={companyOpen}
                        onClose={handleDropdownClose}
                        PaperProps={{
                          sx: {
                            mt: 0.5,

                            "& .MuiMenuItem-root": {
                              fontSize: 15,
                              color: "#092C4C",

                              "&:hover": {
                                backgroundColor: "#092C4C",
                                color: "#FFFFFF",
                              },
                            },

                            // '&:before': {
                            //   content: '""',
                            //   display: 'block',
                            //   position: 'absolute',
                            //   top: 0,
                            //   left: 14,
                            //   width: 10,
                            //   height: 10,
                            //   bgcolor: 'background.paper',
                            //   transform: 'translateY(-50%) rotate(45deg)',
                            //   zIndex: 0,
                            // },
                          },
                        }}
                      >
                        <MenuItem
                          component={RouterLink}
                          to='/about-us'
                          onClick={handleDropdownClose}
                          underline='none'
                          divider={true}
                        >
                          About DSpatch
                        </MenuItem>
                        <MenuItem
                          component={RouterLink}
                          to='/what-we-offer'
                          onClick={handleDropdownClose}
                          underline='none'
                          divider={true}
                        >
                          Our Offerings
                        </MenuItem>
                        <MenuItem
                          component={RouterLink}
                          to='/how-dspatch-works'
                          onClick={handleDropdownClose}
                          underline='none'
                        >
                          How DSpatch Works
                        </MenuItem>
                      </Menu>
                    </span>
                  );
                } else if (item.toLowerCase() == "partner with dspatch") {
                  return (
                    <span key={index}>
                      <Button
                        endIcon={<ArrowDropDown />}
                        onClick={(event) => handleDropdownOpen(event, "partners")}
                        sx={{
                          mx: { md: 0.7 },
                          color: "#092C4C",
                          textTransform: "capitalize",
                          transition: "all .3s ease-in-out",
                          "&:hover": { color: "inherit", backgroundColor: "#F4F4F6" },
                        }}
                      >
                        {item}
                      </Button>

                      <Menu
                        anchorEl={partnersAnchor}
                        open={partnersOpen}
                        onClose={handleDropdownClose}
                        PaperProps={{
                          sx: {
                            mt: 0.5,

                            "& .MuiMenuItem-root": {
                              fontSize: 15,
                              color: "#092C4C",

                              "&:hover": {
                                backgroundColor: "#092C4C",
                                color: "#FFFFFF",
                              },
                            },
                          },
                        }}
                      >
                        <MenuItem
                          component={RouterLink}
                          to='/dspatcher'
                          onClick={handleDropdownClose}
                          underline='none'
                          divider={true}
                        >
                          DSpatchers
                        </MenuItem>
                        <MenuItem
                          component={RouterLink}
                          to='/customer'
                          onClick={handleDropdownClose}
                          underline='none'
                          divider={true}
                        >
                          Restaurants/Stores
                        </MenuItem>
                        <MenuItem
                          component={RouterLink}
                          to='/courier'
                          onClick={handleDropdownClose}
                          underline='none'
                          divider={true}
                        >
                          Couriers
                        </MenuItem>
                        <MenuItem
                          component={RouterLink}
                          to='/fleet-owner'
                          onClick={handleDropdownClose}
                          underline='none'
                        >
                          Fleet Owners
                        </MenuItem>
                      </Menu>
                    </span>
                  );
                } else {
                  return (
                    <Button
                      component={RouterLink}
                      to={item.toLowerCase()}
                      underline='none'
                      key={index}
                      sx={{
                        mx: { md: 0.7 },
                        color: "#092C4C",
                        textTransform: "capitalize",
                        transition: "all .3s ease-in-out",
                        "&:hover": { color: "inherit", backgroundColor: "#F4F4F6" },
                      }}
                    >
                      {item}
                    </Button>
                  );
                }
              })}
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Btn
                component={RouterLink}
                to='/signin'
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "#092C4C",
                  marginRight: "10px",
                  fontSize: "13px",
                  borderRadius: "3px",
                  border: "1.5px",

                  "&:hover": {
                    backgroundColor: "#CEDFDB",
                  },
                }}
                variant='outlined'
              >
                Sign In
              </Btn>

              <Btn
                component={RouterLink}
                to='/signup'
                sx={{ fontSize: "13px", borderRadius: "3px", border: "1.5px" }}
              >
                Sign Up
              </Btn>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor='left'
            ModalProps={{
              keepMounted: true,
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
