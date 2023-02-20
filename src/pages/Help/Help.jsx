import { Fragment } from "react";

// Material imports
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

// Assets
import theme from "../../assets/theme";
import { ChatIcon, CustomerSupport, EmailIcon, FaqIcon, PhoneIcon } from "../../assets";

import useStyle from "./styles";

const Card = (props) => {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.alignment}>
        <img className={classes.imageMockup} src={props.icon} alt='' />
      </div>
      <Typography variant='h6' mt={1.5} color='#092C4C' textAlign='center' fontSize='20px'>
        <Link href={props.link} underline="hover" color="inherit">{props.action}</Link> 
      </Typography>
      <Typography variant='h6' mb={1.5} color='#282828' textAlign='center' fontSize='14px'>
        {props.description}
      </Typography>
    </Fragment>
  );
};

const Help = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          my: 5,
          py: 10,

          [theme.breakpoints.down("sm")]: {
            backgroundColor: "#FAFAFA",
          },
        }}
      >
        <Stack spacing={12}>
          <Grid container direction={{ xs: "column", md: "row" }} columnSpacing={{ md: 6 }}>
            <Grid
              xs
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant='h4' mb={1.5} color='#092C4C'>
                24/7 Support
              </Typography>
              <Typography variant='subtitle2' mb={{ xs: 4, md: 0 }} color='#092C4C'>
                We want your packages to move securely, make the most of your time, and send your
                goods to anyone without hassle. That’s why we are dedicated to safety in all aspects
                of our services, from the creation of new standards to the development of technology
                with the aim of making rapid deliveries.
              </Typography>
            </Grid>

            <Grid xs>
              <Box
                sx={{
                  height: { xs: "180px", md: "300px" },
                  backgroundImage: `url(${CustomerSupport})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            <Grid xs={11} sm={8} md={4}>
              <Box
                sx={{
                  height: 216,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Card icon={PhoneIcon} action='Call Us' description='9AM - 5PM, M-F' link="tel:" />
              </Box>
            </Grid>

            <Grid xs={11} sm={8} md={4}>
              <Box
                sx={{
                  height: 216,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Card icon={ChatIcon} action='Chat' description='9AM - 5PM, M-F' link="#" />
              </Box>
            </Grid>

            <Grid xs={11} sm={8} md={4}>
              <Box
                sx={{
                  height: 216,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Card icon={EmailIcon} action='Email Us' description='Always Available' link="mailto:" />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent='center'
            alignItems='center'
          >
            <Grid xs={12} md={12}>
              <Box
                sx={{
                  height: 216,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Card icon={FaqIcon} action='Frequently Asked Questions' link="#"/>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Help;
