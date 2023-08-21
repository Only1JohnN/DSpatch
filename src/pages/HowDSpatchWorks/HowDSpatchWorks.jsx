import React, { useState } from "react";

// Material imports
import { Box, Stack, Typography } from "@mui/material";

import { StepperLine } from "../../assets";

import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";
// import { withStyles } from "@mui/styles";

import theme from "../../assets/theme";
// import { useStyles } from "./styles";

const loopMe = [0, 1, 2, 3, 4, 5];

const steps = [
  {
    label: "Order Request",
    description:
      "Customers place an order through the app, specifying pickup and delivery locations.",
  },
  {
    label: "Efficient DSpatcher Matching",
    description:
      "Our advanced system swiftly identifies and matches a dedicated DSpatcher to the customer's order.",
  },
  {
    label: "Secure Package Pickup",
    description:
      "The assigned DSpatcher arrives at the pickup point, collects the package, and ensures its safety.",
  },
  {
    label: "Seamless Payment",
    description:
      "Customers conveniently complete payments through the app after the successful pickup.",
  },
  {
    label: "Reliable Delivery",
    description:
      "The DSpatcher delivers the package to its designated destination, ensuring prompt and secure arrival.",
  },
  {
    label: "Customer Feedback and Rating",
    description:
      "Customers have the opportunity to provide feedback and rate the DSpatcher's service, enhancing future experiences.",
  },
];

const HowDispatchWorks = () => {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box
        component='main'
        sx={{
          width: "100%",
          my: 15,
          py: 10,
          mb: 30,
          px: { xs: 1, md: 18 },
        }}
      >
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography
            variant='h4'
            color={"#092C4C"}
            sx={{
              fontSize: { xs: "30px", md: "48px" },
              fontWeight: "700",
              lineHeight: "52.8px",
            }}
          >
            How to use the DSpatch app
          </Typography>

          <Typography
            variant='p'
            color={"#092C4C"}
            sx={{
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "22.4px",
            }}
          >
            Our primary offering involves creating technology that instantly links customers with
            DSpatchers. Here's a breakdown of how the application functions, presented step by step:
          </Typography>
        </Box>

        <Stack direction={"row"} spacing={{ xs: 4, sm: 8, md: 16 }} sx={{ my: 12, width: "100%" }}>
          <Grid container direction={"column"} rowSpacing={{ xs: 3, sm: 6, md: 12 }} sx={{ py: 7 }}>
            {loopMe.map((_, index) => (
              <Grid xs key={index}>
                <Box
                  sx={{
                    height: { xs: "214px", md: "300px" },
                    width: { xs: "314px", md: "400px" },
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      background: "var(--color-grey-4, #BDBDBD)",
                      height: "inherit",
                      borderBottomRightRadius: { xs: "30px", md: "50px" },
                      borderBottomLeftRadius: { xs: "30px", md: "50px" },
                      borderTopRightRadius: { xs: "6px", md: "10px" },
                      borderTopLeftRadius: { xs: "6px", md: "10px" },
                      width: "inherit",
                    }}
                  ></Box>

                  <Typography
                    variant='h1'
                    color='#E7E8ED'
                    sx={{
                      position: "absolute",
                      top: -78,
                      left: 367,
                      fontSize: "190px",
                      fontWeight: "600",
                      zIndex: -1,
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={"row"}
            spacing={{ xs: 3, sm: 6, md: 13 }}
            sx={{
              position: "relative",
            }}
          >
            <img
              src={StepperLine}
              alt='Stepper line'
              style={{
                height: "1990px",
                position: "absolute",
                top: 157,
              }}
            />

            <Grid container direction={"column"} rowSpacing={{ xs: 3, sm: 6, md: 12 }}>
              {steps.map((step, index) => (
                <Grid
                  xs
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    justifyContent: "center",
                    height: { xs: "214px", md: "300px" },
                    width: { xs: "400px", md: "505px" },
                  }}
                >
                  <Typography
                    variant='h4'
                    mb={1.5}
                    color='#092C4C'
                    sx={{
                      fontSize: "40px",
                      fontWeight: 700,
                      lineHeight: "44px",
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    mb={{ xs: 4, md: 0 }}
                    color='#092C4C'
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "22.4px",
                    }}
                  >
                    {step.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default HowDispatchWorks;
