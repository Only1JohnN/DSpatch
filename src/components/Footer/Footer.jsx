import React from "react";
import {
  FooterLogo,
  facebookIcon,
  igIcon,
  twitterIcon,
  inIcon,
  tikTokIcon,
} from "../../assets/index";

import Grid from "@mui/material/Unstable_Grid2";

// Material imports
import { Box, IconButton, List, Typography, Link, Container } from "@mui/material";

// React-Router-Dom
import { Link as RouterLink } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <Box className='footer__wrapper'>
      <Container
        sx={{
          mt: 7,
        }}
        className='top__section'
      >
        <Grid
          // spacing={12}
          container
          direction={{ xs: "column", md: "row" }}
          columnSpacing={{ md: 6 }}
        >
          <Grid xs className='logo__con'>
            <img src={FooterLogo} alt='DSpatch' />
            <p>Drive Safe. Delivery Fast...</p>
          </Grid>
          <Grid xs style={{ marginBottom: "2rem" }}>
            <List>
              <Typography variant='h5' color='#092C4C'>
                Quick Links
              </Typography>
              <li>
                <Link component={RouterLink} underline='none' to='tracking'>
                  Tracking
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='safety'>
                  Safety
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='support'>
                  Support
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='help'>
                  Help
                </Link>
              </li>
            </List>
          </Grid>
          <Grid xs style={{ marginBottom: "2rem" }}>
            <List>
              <Typography variant='h5' color='#092C4C'>
                Company
              </Typography>
              <li>
                <Link component={RouterLink} underline='none' to='about-us'>
                  About DSpatch
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='offerings'>
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='how'>
                  How DSpatch works
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='press'>
                  Press
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='blog'>
                  Blog
                </Link>
              </li>
            </List>
          </Grid>
          <Grid xs style={{ marginBottom: "2rem" }}>
            <List>
              <Typography variant='h5' color='#092C4C'>
                Partner with DSpatch
              </Typography>
              <li>
                <Link component={RouterLink} underline='none' to='customer'>
                  Sign up as Customer
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='courier'>
                  Sign up as a Courier
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='signupasdspatcher'>
                  Sign up as a DSpatcher
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='fleet-owner'>
                  Fleet owner
                </Link>
              </li>
            </List>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          mb: 5,
          mt: 2,
        }}
        className='bottom__Container'
      >
        <Grid container direction={{ xs: "column", md: "row" }} columnSpacing={{ md: 4 }}>
          <hr />
          <Grid xs className='icons__container'>
            <Link href='facebook-handle'>
              <IconButton>
                <img src={facebookIcon} alt='' />
              </IconButton>
            </Link>

            <Link href='ig-handle'>
              <IconButton>
                <img src={igIcon} alt='' />
              </IconButton>
            </Link>

            <Link href='twitter-handle'>
              <IconButton>
                <img src={twitterIcon} alt='' />
              </IconButton>
            </Link>

            <Link href='linked-in-handle'>
              <IconButton>
                <img src={inIcon} alt='' />
              </IconButton>
            </Link>

            <Link href='tik-tok'>
              <IconButton>
                <img src={tikTokIcon} alt='' />
              </IconButton>
            </Link>
          </Grid>
          <Grid xs className='copyright__con'>
            <small>Copyrights &copy; 2023 DSpatch.&nbsp; All rights reserved.</small>
          </Grid>
          <Grid xs className='terms__con'>
            <List>
              <li>
                <Link component={RouterLink} underline='none' to='./terms-of-use'>
                  Terms & Conditions &nbsp; &nbsp;
                </Link>
              </li>
              <li>
                <Link component={RouterLink} underline='none' to='./cookies-and-policy'>
                  Cookie policy
                </Link>
              </li>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
