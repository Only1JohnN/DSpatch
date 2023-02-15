
// Material imports
import {
    Box,
    Container,
    Stack,
    Typography,
  } from "@mui/material";
  import Grid from "@mui/material/Unstable_Grid2";
  import { ThemeProvider } from "@mui/material/styles";
  
  // Assets
  import theme from "../../assets/theme";
  import {
    SafetyService,
    DeliveryTracking,
    Insured,
    Verify
  } from "../../assets"

const Safety = () => {
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
                <Typography variant='h3' mb={1.5} color='#092C4C'>
                Our Dedication to Safety
                </Typography>
                <Typography variant='subtitle1' mb={{ xs: 4, md: 0 }} color='#092C4C'>
                We want your packages to move securely, make the most of your time, and send your goods to anyone without hassle. 
                That's why we are dedicated to safety in all aspects of our services, 
                from the creation of new standards to the development of technology with the aim of making rapid deliveries.
                </Typography>
              </Grid>
              
              <Grid xs>
                <Box
                  sx={{
                    height: { xs: "180px", md: "300px" },
                    backgroundImage: `url(${SafetyService})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </Grid>
            </Grid>

            <Typography variant='h4' mb={1.5} color='#092C4C' textAlign="center">
              How safety is built into your experience
            </Typography>
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
                Track Your Packages
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                Share and track your packages via our website and mobile app and monitor your Dispatchers journey.
                 Our technology helps put peace of mind at your fingertips.
                </Typography>
              </Grid>

              <Grid xs>
                <Box
                  sx={{
                    height: { xs: "180px", md: "300px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    backgroundImage: `url(${DeliveryTracking})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
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
                    height: { xs: "180px", md: "300px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    backgroundImage: `url(${Verify})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
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
                DSPatcher Information
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                After confirming your order, we display our DSpatcher's profile information and bike description on the app for you to verify before dropping your package. 
                By doing this we help you make sure your goods are in the right hands.
                </Typography>
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
                Packages are Insured
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 4, md: 0 }} color='#092C4C'>
                We have partnered with Insurance to insure all your goods with us, therefore any complaint with respect 
                to damaged goods, delay in delivery, or missing goods, must be directed to DSPatch registered office, 
                phone call, or email address within 3 days after the completion of the order.
                </Typography>
              </Grid>

              <Grid xs>
                <Box
                  sx={{
                    height: { xs: "180px", md: "300px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    backgroundImage: `url(${Insured})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </Grid>
            </Grid>



          </Stack>
        </Container>
        </ThemeProvider>
    );
}
 
export default Safety;