import React from "react";

// Material imports
import {
  Box,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
  Card,
  Avatar,
  Rating,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

// React-Router-Dom
import { Link as RouterLink } from "react-router-dom";

// Assets
import theme from "../../assets/theme";
import {
  AppStore,
  Helmet,
  PlayStore,
  DeliveryMan,
  SmartPhone,
  Wallet,
  BlurMotion,
  Bikers,
  BikePOV,
} from "../../assets";

import { Button } from "../../components";

import useStyles from "./styles";

const services = [
  {
    title: "Find a Ride",
    image: DeliveryMan,
    content: "DSpatch offers you ride for your packages in few minutes.",
  },
  {
    title: "Great Prices",
    image: Wallet,
    content:
      "The finest ride rates in every city are what we strive to provide. Come and have a look!",
  },
  {
    title: "Easy to use",
    image: SmartPhone,
    content: "Deliver your packages as soon as you can to the desired location.",
  },
];

const Landing = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={theme}>
      <Box component='main' className={classes.wrapper}>
        <Grid container direction={{ xs: "column", md: "row" }} sx={{ height: "95vh" }}>
          <Grid xs sx={{ backgroundColor: "#092C4C", alignItems: "center", display: "flex" }}>
            <Container
              sx={{
                mx: { md: 5 },
                pt: { xs: 3, md: 0 },
                my: { xs: 5, md: 0 },
              }}
            >
              <Typography
                variant='h3'
                color='#ffffff'
                mb={1.5}
                sx={{ fontWeight: "700px", fontSize: "48px", width: { md: "498px" } }}
              >
                The quick, inexpensive platform to travel your goods
              </Typography>
              <Typography
                variant='body1'
                color='#ffffff'
                mb={{ xs: 3, md: 10 }}
                sx={{ marginBottom: "72px", fontSize: "16px", width: { md: "512px" } }}
              >
                DSptach is a platform to transport goods and services from anywhere in Nigeria. With
                our quality drivers registered to the platform, your goods are in safe hands.
              </Typography>

              <Typography variant='body1' color='#ffffff' mb={1} sx={{ fontSize: "18px" }}>
                Download the DSpatch app
              </Typography>

              <Stack direction='row' spacing={{ xs: 4, md: 8 }} sx={{ marginRight: "20px" }}>
                <Link to='#' component={RouterLink}>
                  <img
                    className={classes.store}
                    src={AppStore}
                    alt='Install from Apple App Store'
                  />
                </Link>
                <Link to='#' component={RouterLink}>
                  <img
                    className={classes.store}
                    src={PlayStore}
                    alt='Install from Google Play Store'
                  />
                </Link>
              </Stack>
            </Container>
          </Grid>

          <Grid
            xs
            sx={{
              backgroundImage: `url(${Helmet})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        <Box className={classes.miniJumbo}>
          <Box
            sx={{
              minHeight: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              sx={{
                py: 5,
              }}
            >
              <Grid container direction={{ xs: "column", md: "row" }}>
                <Grid xs>
                  <Typography
                    variant='h4'
                    color='#ffffff'
                    mb={1}
                    sx={{
                      fontWeight: "700px",
                      marginBottom: "16px",
                      width: { md: "429px" },
                      marginLeft: "16px",
                      padding: "24px",
                    }}
                  >
                    Become a DSpatcher and get paid
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    color='#ffffff'
                    sx={{
                      fontSize: "18px",
                      marginLeft: "35px",
                      marginBottom: "5px",
                    }}
                  >
                    Drive on the platform with the most active rider network.
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    color='#ffffff'
                    mb={{ xs: 3, md: 0 }}
                    sx={{
                      marginLeft: "35px",
                    }}
                  >
                    Be your own boss and choose your own schedule.
                  </Typography>
                </Grid>
                <Grid
                  xs
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "end" },
                    alignItems: "center",
                  }}
                >
                  <Button
                    size='small'
                    sx={{
                      borderRadius: "30px",
                      backgroundColor: "#ffffff",
                      color: "#092C4C",
                      height: "fit-content",
                      fontWeight: "700px",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "#E9E9E9",
                      },
                    }}
                  >
                    Sign Up to DSpatch
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        {/* SERVICES */}
        <Container
          sx={{
            mt: 15,
          }}
        >
          <Stack direction={{ md: "row" }} spacing={{ xs: 6, md: 12 }}>
            {services.map((service, index) => (
              <Grid
                key={index}
                container
                direction={{ xs: "row", md: "column" }}
                display='flex'
                justifyContent='center'
                textAlign={{ md: "center" }}
                alignItems='center'
                rowSpacing={4}
              >
                <Grid xs={4} md='auto'>
                  <Box
                    sx={{
                      backgroundImage: `url(${service.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      height: { xs: "90px", md: "200px" },
                      width: { xs: "90px", md: "200px" },
                    }}
                  />
                </Grid>

                {index < 1 && isDesktop ? (
                  <Grid>
                    <Typography variant='h5' fontSize={{ xs: 20, md: 24 }} fontWeight={600} mb={1}>
                      {service.title}
                    </Typography>
                    <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} lineHeight={1.5}>
                      {service.content}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid xs>
                    <Typography variant='h5' fontSize={{ xs: 20, md: 24 }} fontWeight={600} mb={1}>
                      {service.title}
                    </Typography>
                    <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} lineHeight={1.5}>
                      {service.content}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            ))}
          </Stack>
        </Container>

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
                  The greatest delivery personnel you've ever encountered
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 4, md: 0 }} color='#092C4C'>
                  Meet with great delivery DSpatchers and get the perfect service you want for your
                  customers
                </Typography>
              </Grid>

              <Grid xs>
                <Box
                  sx={{
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    backgroundImage: `url(${BlurMotion})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              direction={{ xs: "column-reverse", md: "row" }}
              columnSpacing={{ md: 6 }}
            >
              <Grid xs>
                <Box
                  sx={{
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    backgroundImage: `url(${Bikers})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                />
              </Grid>

              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant='h4' mb={1.5} color='#092C4C'>
                  Excellent riders and partners ready to deliver
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                  There will always be a DSpatcher nearby to pick up your packages and more because
                  they are spread around over every city.
                </Typography>
                <Button
                  sx={{
                    width: "fit-content",
                    mt: { xs: 0, md: 2 },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  Sign Up to get started
                </Button>
              </Grid>
            </Grid>

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
                  Got a Bike?
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                  We want you on the DSpatch Team if you own a bike and want to increase your
                  income. Join the DSpatch team to boost your income. Be your own boss and choose
                  your own schedule.
                </Typography>
                <Button
                  sx={{
                    width: "fit-content",
                    mt: { xs: 0, md: 2 },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  Partner with Us!
                </Button>
              </Grid>

              <Grid xs>
                <Box
                  sx={{
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    backgroundImage: `url(${BikePOV})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>

        {/* TESTIMONIALS */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 10,
            mb: 5,
          }}
        >
          <Chip
            label='Testimonials'
            sx={{ fontWeight: "700", textTransform: "uppercase", color: "#EB5757" }}
          />
          <Typography
            variant='h4'
            fontWeight={600}
            fontSize={{ xs: 24, md: 32 }}
            textAlign='center'
          >
            Every user has a story to tell.
          </Typography>
          <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} textAlign='center'>
            See how Dspatch changed people's perspectives about their businesses, finances and
            themselves.
          </Typography>

          <Stack spacing={8} direction={{ xs: "column", md: "row" }} my={{ xs: 2, md: 4 }}>
            <Card elevation={6}>
              <CardContent>
                <Rating
                  name='Costumer rating'
                  sx={{
                    color: "#EB5757",
                  }}
                  value={5}
                  readOnly
                />

                <Typography variant='subtitle2' my={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id accusantium
                  doloribus tenetur velit, facere recusandae et, repellat in consequuntur aliquid
                  inventore voluptates veritatis rem.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar alt='Customer' src='/' />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant='subtitle1' fontWeight={600} lineHeight='22px'>
                      Adeniyi John
                    </Typography>
                    <Typography variant='caption'>Founder of E-Genta</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={6}>
              <CardContent>
                <Rating
                  name='Costumer rating'
                  precision={0.5}
                  sx={{
                    color: "#EB5757",
                  }}
                  value={4.5}
                  readOnly
                />

                <Typography variant='subtitle2' my={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id accusantium
                  doloribus tenetur velit, facere recusandae et, repellat in consequuntur aliquid
                  inventore voluptates veritatis rem.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar alt='Y' src='/' />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant='subtitle1' fontWeight={600} lineHeight='22px'>
                      Yemi Skujyl
                    </Typography>
                    <Typography variant='caption'>Deputy Director at CBC</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={6}>
              <CardContent>
                <Rating
                  name='Costumer rating'
                  sx={{
                    color: "#EB5757",
                  }}
                  value={4}
                  readOnly
                />

                <Typography variant='subtitle2' my={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id accusantium
                  doloribus tenetur velit, facere recusandae et, repellat in consequuntur aliquid
                  inventore voluptates veritatis rem.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar alt='N' src='/' />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant='subtitle1' fontWeight={600} lineHeight='22px'>
                      Naijablog
                    </Typography>
                    <Typography variant='caption'>@naijablog9ja</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Container>

        <Box className={classes.jumbotron} minHeight='45vh' py={2} px={4} textAlign='center'>
          <Stack>
            <Typography variant='h4' color='#ffffff' mb={5}>
              Ready to send goods to your customer?
            </Typography>

            <Stack direction='row' spacing={{ xs: 4, md: 8 }} justifyContent='center'>
              <Link to='#' component={RouterLink}>
                <img className={classes.store} src={AppStore} alt='Install from Apple App Store' />
              </Link>
              <Link to='#' component={RouterLink}>
                <img
                  className={classes.store}
                  src={PlayStore}
                  alt='Install from Google Play Store'
                />
              </Link>
            </Stack>

            <Typography variant='caption' mt={6} mx='auto' color='#ffffff'>
              or{" "}
              <Link component={RouterLink} to='#' color='inherit'>
                Sign Up
              </Link>{" "}
              to start DSpatching
            </Typography>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
