import { useState } from "react";
import { CircularProgress } from "@mui/material";
import React from "react";
import TextInput from "../../components/input";
import Checkbox from "../../components/CheckBox";
// Material imports
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

import { CircleDesign, FooterLogo, LineDesign, SignInDesign } from "../../assets";
import useStyles from "./styles";
import theme from "../../assets/theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const SignIn = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    isDefault: true,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      console.log(values);
      resetForm();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "gray" }} component='main' className={classes.wrapper}>
        <Grid container direction={{ xs: "column", md: "row" }} sx={{ minHeight: "100vh" }}>
          <Grid
            xs={4.1}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              backgroundColor: "#ffff",
              padding: "12px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ffff",
                backgroundImage: `url(${SignInDesign})`,
                backgroundRepeat: "no-repeat",
                borderRadius: "6px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  height: "375px",
                  backgroundColor: "rgba(255, 255, 255, 0.73)",
                  backdropFilter: "blur(2px)",
                  webkitBackdropFilter: "blur(2px)",
                  padding: "12px 2.5rem",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    backgroundColor: "#FFFFFF",
                    backgroundImage: "linear-gradient(#092c4c2f, #f2984a21)",
                    borderRadius: "0px 0px 10px 10px",
                    width: "100%",
                    padding: "1rem 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className='test'
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "-15px",
                    }}
                    src={CircleDesign}
                    alt=''
                  />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "32px",
                      fontWeight: "700",
                      lineHeight: "35px",
                      maxWidth: "400px",
                      marginBottom: "2rem",
                    }}
                    variant='h3'
                    color='#092C4C'
                    mb={1.5}
                  >
                    Deliver your products to your customers with{" "}
                    <span style={{ color: "#27AE60" }}>EASE</span>:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "32px",
                      fontWeight: "700",
                      lineHeight: "35px",
                      maxWidth: "400px",
                    }}
                    variant='h3'
                    color='#F2994A'
                    mb={1.5}
                  >
                    Fast, Affordable and Quick
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs sx={{ backgroundColor: "#ffff", alignItems: "center", display: "flex" }}>
            <Container
              sx={{
                mx: { md: 5 },
                pt: { xs: 3, md: 3 },
                my: { xs: 5, md: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <img style={{ width: "225px", objectFit: "contain" }} src={FooterLogo} alt='logo' />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "48px",
                  fontWeight: "700",
                  lineHeight: "53px",
                }}
                variant='h3'
                color='#092C4C'
                mb={1.5}
              >
                Sign in
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
                variant='body1'
                color='#092C4C'
                mb={{ xs: 3, md: 3 }}
              >
                Welcome back! Please enter your details.
              </Typography>

              <Box
                sx={{
                  marginBottom: "1rem",
                }}
              >
                <form
                  style={{
                    margin: "0 auto",
                    maxWidth: "543px",
                  }}
                  onSubmit={formik.handleSubmit}
                >
                  <Box>
                    <Box>
                      <TextInput
                        {...formik.getFieldProps("email")}
                        placeholder='Email Address'
                        label='Email Address'
                        type='email'
                        name='email'
                      />
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        {formik.touched.email && formik.errors.email && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                            }}
                          >
                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      <TextInput
                        name='password'
                        {...formik.getFieldProps("password")}
                        placeholder='Password (8+ characters)'
                        label='Password'
                        type='password'
                      />
                      {formik.touched.password && formik.errors.password && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                          }}
                        >
                          <span style={{ color: "red" }}>{formik.errors.password}</span>
                        </Box>
                      )}
                    </Box>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        marginBottom: "2rem",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#092C4C",
                        }}
                      >
                        <Checkbox
                          id='status'
                          onChange={formik.handleChange}
                          name='isDefault'
                          {...formik.getFieldProps("isDefault")}
                          onClick={() => {}}
                        >
                          Remember me
                        </Checkbox>
                      </div>
                      <Link underline='none' to='forgotpassword'>
                        {" "}
                        <span
                          style={{
                            fontWeight: "400",
                            fontSize: "20px",
                            lineHeight: "28px",
                            color: "#092C4C",
                            cursor: "pointer",
                          }}
                        >
                          Forgot Password?
                        </span>
                      </Link>
                    </div>
                    <button
                      type='submit'
                      style={{
                        display: "inline-block",
                        width: "100%",
                        height: "55px",
                        background: "#092C4C",
                        borderRadius: "3px",
                        color: "#FFFFFF",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "28px",
                        cursor: "pointer",
                        marginBottom: "1rem",
                      }}
                    >
                      {loading ? <CircularProgress color='inherit' size={20} /> : "Sign In"}
                    </button>
                  </Box>
                </form>
              </Box>

              <Typography
                variant='body1'
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
                color='#092C4C'
                mb={{ xs: 3, md: 10 }}
              >
                Don’t have a DSpatch account?{" "}
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to='/signup'
                >
                  <span
                    style={{
                      color: "#F2994A",
                      fontWeight: "700",
                      position: "relative",
                      paddingBottom: ".8rem",
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                    <img
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                      }}
                      src={LineDesign}
                      alt=''
                    />
                  </span>
                </Link>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SignIn;
