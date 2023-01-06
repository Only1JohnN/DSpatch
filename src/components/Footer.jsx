import React from "react";
import {
  FooterLogo,
  facebookIcon,
  igIcon,
  twitterIcon,
  inIcon,
  tikTokIcon,
} from "../assets/index";

import Grid from "@mui/material/Unstable_Grid2";

// Material imports
import { Box, IconButton, List, Typography, Link, Container } from "@mui/material";

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
                <a href='tracking'>Tracking</a>
              </li>
              <li>
                <a href='safety'>Safety</a>
              </li>
              <li>
                <a href='support'>Support</a>
              </li>
              <li>
                <a href='help'>Help</a>
              </li>
            </List>
          </Grid>
          <Grid xs style={{ marginBottom: "2rem" }}>
            <List>
              <Typography variant='h5' color='#092C4C'>
                Company
              </Typography>
              <li>
                <a href='about-us'>About DSpatch</a>
              </li>
              <li>
                <a href='offerings'>Our Offerings</a>
              </li>
              <li>
                <a href='how'>How DSpatch works</a>
              </li>
              <li>
                <a href='press'>Press</a>
              </li>
              <li>
                <a href='blog'>Blog</a>
              </li>
            </List>
          </Grid>
          <Grid xs style={{ marginBottom: "2rem" }}>
            <List>
              <Typography variant='h5' color='#092C4C'>
                Partner with DSpatch
              </Typography>
              <li>
                <a href='signupascustomer'>Sign up as Customer</a>
              </li>
              <li>
                <a href='signupascourier'>Sign up as a Courier</a>
              </li>
              <li>
                <a href='signupasdspatcher'>Sign up as a DSpatcher</a>
              </li>
              <li>
                <a href='fleet'>Fleet owner</a>
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
                <a href='./terms'>Terms & Conditions &nbsp; &nbsp;</a>
              </li>
              <li>
                <a href='./cookie'>Cookie policy</a>
              </li>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
  return <div>Footers</div>;
};

export default Footer;
