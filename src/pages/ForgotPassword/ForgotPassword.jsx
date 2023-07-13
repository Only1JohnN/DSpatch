import { useState } from "react";
import { CircularProgress } from "@mui/material";
import React from "react";
import TextInput from "../../components/input";
import Checkbox from "../../components/CheckBox";
// Material imports
import { Box, Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

import { CircleDesign, FooterLogo, LineDesign, SignInDesign } from "../../assets";
import useStyles from "./styles";
import theme from "../../assets/theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";

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

const ForgotPassword = () => {
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
        <Grid xs sx={{ backgroundColor: "#ffff", alignItems: "center", display: "flex" }}>
          <Container
            sx={{
              mx: { md: 5 },
              pt: { xs: 3, md: 3 },
              my: { xs: 5, md: 2 },
            }}
          >
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
                    <Link component={RouterLink} underline='none' to='forgotpassword'>
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
                to='/sign-up'
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
      </Box>
    </ThemeProvider>
  );
};

export default ForgotPassword;
