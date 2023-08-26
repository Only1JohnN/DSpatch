import { useState } from "react";
import { CircularProgress } from "@mui/material";
import React from "react";
import TextInput from "../../../components/input";
import Checkbox from "../../../components/CheckBox";
// Material imports
import {
  Box,
  Container,
  Typography,
  Step,
  Stepper,
  StepLabel,
  Stack,
  Button,
  Card,
  //Select,
  //FormControl,
  //MenuItem,
  //InputLabel,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../../assets/theme";
import {
  FooterLogo,
  LineDesign,
  DspatchWhiteLogo,
  WhatsAppLogo,
  SgnUpBike,
  FileFill,
  FileFillDark,
} from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import IteratorIcon, { IteratorConnector } from "../../../components/Iterator";
import { Done } from "@mui/icons-material";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signInSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Full name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  city: Yup.string().required("Required field"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  }),
});

const steps = [
  "Personal Information",
  "Private & licensing information",
  "Documents",
  "Payment Details",
];

const RiderSignUp = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    password: "",
    confirmPassword: "",
    isDefault: true,
    isVehicle: true,
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

  // step styles
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  // select styles
  // const [sinoki, setSinoki] = React.useState("");

  // const handleChange = (event) => {
  //   setSinoki(event.target.value);
  // };

  return (
    <ThemeProvider theme={theme}>
      {activeStep === 0 ? (
        <Box sx={{ backgroundColor: "gray" }} component='main' className={classes.wrapper}>
          <Grid container direction={{ xs: "column", md: "row" }} sx={{ minHeight: "100vh" }}>
            <Grid
              xs={6}
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
                  height: "992px",
                  backgroundColor: "#ffff",
                  backgroundImage: `url(${SgnUpBike})`,
                  backgroundRepeat: "no-repeat",
                  borderRadius: "6px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    justifyContent: "start",
                    bottom: "0",
                    width: "100%",
                    minHeight: "375px",
                    padding: "12px 2.5rem",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "190.86px",
                      marginBottom: "2rem",
                    }}
                    src={DspatchWhiteLogo}
                    alt=''
                  />
                  <Typography
                    sx={{
                      fontSize: "48px",
                      fontWeight: "700",
                      lineHeight: "53px",
                      maxWidth: "500px",
                      marginBottom: "2rem",
                    }}
                    variant='h3'
                    color='#FFFFFF'
                    mb={1.5}
                  >
                    “Be your own boss and choose your own schedule”
                  </Typography>
                  <Box
                    sx={{
                      fontSize: "14px",
                      fontWeight: "700",
                      maxWidth: "232px",
                      height: "48px",
                      background: "#F2994A",
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    variant='h3'
                    color='#FFFFFF'
                    mb={1.5}
                  >
                    Sign up as a Fleet Owner
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
                  <img
                    style={{ width: "225px", objectFit: "contain" }}
                    src={FooterLogo}
                    alt='logo'
                  />
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
                  Sign Up
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "28px",
                      maxWidth: "37rem",
                    }}
                    variant='body1'
                    color='#092C4C'
                    mb={{ xs: 3, md: 3 }}
                  >
                    Sign up as a DSpatcher or if you have many vehicles and riders,{" "}
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      to='/sign-up-fleet'
                    >
                      <span style={{ color: "#F2994A" }}>sign up as fleet owner here</span>
                    </Link>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    maxWidth: "543px",
                    maxHeight: "54px",
                    background: "#25D366",
                    borderRadius: "3px",
                    margin: "0 auto",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 0",
                    marginTop: "4rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <img src={WhatsAppLogo} alt='' />
                    <Box
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "22px",
                        }}
                      >
                        Sign up on
                      </span>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          lineHeight: "28px",
                          marginTop: "-6px",
                        }}
                      >
                        Whatsapp
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "543px",
                    maxHeight: "54px",
                    margin: "1rem auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#828282",
                      height: "1.6px",
                      width: "100%",
                    }}
                  ></div>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "28px",
                      color: "#828282",
                      margin: "0 14px",
                    }}
                  >
                    or
                  </Typography>
                  <div
                    style={{
                      background: "#828282",
                      height: "1.6px",
                      width: "100%",
                    }}
                  ></div>
                </Box>

                <Box
                  sx={{
                    margin: "2rem 0",
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
                      <Box
                        sx={{
                          marginBottom: ".8rem",
                        }}
                      >
                        <TextInput
                          {...formik.getFieldProps("fullName")}
                          placeholder='Your Name'
                          label='Name'
                          type='text'
                          name='fullName'
                        />
                        <Box
                          sx={{
                            position: "relative",
                          }}
                        >
                          {formik.touched.fullName && formik.errors.fullName && (
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                              }}
                            >
                              <span style={{ color: "red" }}>{formik.errors.fullName}</span>
                            </Box>
                          )}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          marginBottom: ".8rem",
                        }}
                      >
                        <TextInput
                          {...formik.getFieldProps("email")}
                          placeholder='Enter Email Address'
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
                          marginBottom: ".8rem",
                        }}
                      >
                        <TextInput
                          {...formik.getFieldProps("phoneNumber")}
                          placeholder='e.g+2347080702920'
                          label='Phone Number'
                          type='tel'
                          name='phoneNumber'
                        />
                        <Box
                          sx={{
                            position: "relative",
                          }}
                        >
                          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                              }}
                            >
                              <span style={{ color: "red" }}>{formik.errors.phoneNumber}</span>
                            </Box>
                          )}
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          marginBottom: ".8rem",
                        }}
                      >
                        <TextInput
                          {...formik.getFieldProps("city")}
                          placeholder='City, State'
                          label='Location'
                          type='text'
                          name='city'
                        />
                        <Box
                          sx={{
                            position: "relative",
                          }}
                        >
                          {formik.touched.city && formik.errors.city && (
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                              }}
                            >
                              <span style={{ color: "red" }}>{formik.errors.city}</span>
                            </Box>
                          )}
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          position: "relative",
                          marginBottom: ".8rem",
                        }}
                      >
                        <TextInput
                          name='password'
                          {...formik.getFieldProps("password")}
                          placeholder='***************'
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
                      <Box
                        sx={{
                          position: "relative",
                          marginBottom: ".8rem",
                        }}
                      >
                        <TextInput
                          name='confirmPassword'
                          {...formik.getFieldProps("confirmPassword")}
                          placeholder='***************'
                          label='Confirm Password'
                          type='password'
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                            }}
                          >
                            <span style={{ color: "red" }}>{formik.errors.confirmPassword}</span>
                          </Box>
                        )}
                      </Box>
                      <div
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          color: "#092C4C",
                          marginBottom: "4rem",
                        }}
                      >
                        <Checkbox
                          id='status'
                          onChange={formik.handleChange}
                          name='isDefault'
                          {...formik.getFieldProps("isDefault")}
                          onClick={() => {}}
                        >
                          I acknowledge that I have read the{" "}
                          <span style={{ color: "#F2994A" }}>Privacy Policy</span> and have read the{" "}
                          <span style={{ color: "#F2994A" }}>Terms of </span>
                          Use for DSpatch before continuing.
                        </Checkbox>
                      </div>

                      <button
                        type='submit'
                        onClick={() => handleNext()}
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
                        {loading ? <CircularProgress color='inherit' size={20} /> : "Next"}
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
                  Already have a DSpatch account?{" "}
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to='/sign-in'
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
                      Sign In
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
      ) : null}

      {/* Page stepper */}
      {activeStep > 0 && activeStep <= steps.length ? (
        <Container
          sx={{
            mt: 13,
          }}
        >
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<IteratorConnector />}
            sx={{
              width: { xs: "100%", sm: "90%", md: "90%" },
              margin: "0 auto",
            }}
          >
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel
                    sx={{ fontSize: "18px", lineHeight: "25.2px" }}
                    StepIconComponent={IteratorIcon}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Container>
      ) : null}

      {
        // activeStep === 1 ? (
        //   // Vehicle step section
        //   <Container>
        //     {/* Main text */}
        //     <Container
        //       sx={{
        //         width: { xs: "100%", sm: "80%", md: "53%" },
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         gap: 2,
        //         mt: { xs: 8, sm: 12, md: 16 },
        //       }}
        //     >
        //       <Typography
        //         variant='h4'
        //         color={"#092C4C"}
        //         sx={{
        //           fontSize: { xs: "30px", md: "48px" },
        //           fontWeight: "700",
        //           lineHeight: "52.8px",
        //         }}
        //       >
        //         Vehicle Information
        //       </Typography>

        //       <Typography
        //         variant='p'
        //         color={"#092C4C"}
        //         sx={{
        //           fontSize: "20px",
        //           fontWeight: "400",
        //           lineHeight: "28px",
        //           textAlign: { xs: "left", sm: "center" },
        //         }}
        //       >
        //         Only your first name and vehicle details are visible to clients during the booking
        //       </Typography>
        //     </Container>

        //     {/* Input fields */}
        //     <Stack
        //       spacing={{ xs: 2, md: 4 }}
        //       sx={{ mt: { xs: 6, sm: 9, md: 12 }, width: "100%", alignItems: "center" }}
        //     >
        //       <Box
        //         sx={{
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: 1.8,
        //           width: { xs: "90%", sm: "75%", md: "62%" },
        //         }}
        //       >
        //         <Typography
        //           variant='p'
        //           sx={{
        //             fontSize: "20px",
        //             fontWeight: 400,
        //             lineHeight: "28px",
        //           }}
        //         >
        //           Vehicle manufacturer
        //         </Typography>

        //         <FormControl
        //           fullWidth
        //           size='small'
        //           sx={{
        //             background: "#F0F0F0",
        //           }}
        //         >
        //           <InputLabel
        //             sx={{
        //               color: "#092C4C",
        //               fontSize: "16px !important",
        //               fontWeight: 400,
        //             }}
        //           >
        //             Sinoki Supra
        //           </InputLabel>
        //           <Select
        //             sx={{
        //               fontSize: "16px !important",
        //               fontWeight: 400,
        //             }}
        //             value={sinoki}
        //             label='Sinoki Supra'
        //             onChange={handleChange}
        //           >
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki"}>
        //               Sinoki
        //             </MenuItem>
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki 2"}>
        //               Sinoki 2
        //             </MenuItem>
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki 3"}>
        //               Sinoki 3
        //             </MenuItem>
        //           </Select>
        //         </FormControl>
        //       </Box>

        //       <Box
        //         sx={{
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: 1.8,
        //           width: { xs: "90%", sm: "75%", md: "62%" },
        //         }}
        //       >
        //         <Typography
        //           variant='p'
        //           sx={{
        //             fontSize: "20px",
        //             fontWeight: 400,
        //             lineHeight: "28px",
        //           }}
        //         >
        //           Vehicle year
        //         </Typography>

        //         <FormControl
        //           fullWidth
        //           size='small'
        //           sx={{
        //             background: "#F0F0F0",
        //           }}
        //         >
        //           <InputLabel
        //             sx={{
        //               color: "#092C4C",
        //               fontSize: "16px !important",
        //               fontWeight: 400,
        //             }}
        //           >
        //             2016
        //           </InputLabel>
        //           <Select
        //             sx={{
        //               fontSize: "16px !important",
        //               fontWeight: 400,
        //             }}
        //             value={sinoki}
        //             label='2016'
        //             onChange={handleChange}
        //           >
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki"}>
        //               Sinoki
        //             </MenuItem>
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki 2"}>
        //               Sinoki 2
        //             </MenuItem>
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki 3"}>
        //               Sinoki 3
        //             </MenuItem>
        //           </Select>
        //         </FormControl>
        //       </Box>

        //       <Box
        //         sx={{
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: 1.8,
        //           width: { xs: "90%", sm: "75%", md: "62%" },
        //         }}
        //       >
        //         <Typography
        //           variant='p'
        //           sx={{
        //             fontSize: "20px",
        //             fontWeight: 400,
        //             lineHeight: "28px",
        //           }}
        //         >
        //           License plate
        //         </Typography>

        //         <TextField
        //           hiddenLabel
        //           size='small'
        //           defaultValue='e.g BUS123ZY'
        //           InputProps={{
        //             style: {
        //               fontSize: "18px",
        //               fontWeight: 400,
        //               color: "#092C4C",
        //               border: "1px solid #092C4C",
        //             },
        //           }}
        //           variant='outlined'
        //         />
        //       </Box>

        //       <Box
        //         sx={{
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: 1.8,
        //           width: { xs: "90%", sm: "75%", md: "62%" },
        //         }}
        //       >
        //         <Typography
        //           variant='p'
        //           sx={{
        //             fontSize: "20px",
        //             fontWeight: 400,
        //             lineHeight: "28px",
        //           }}
        //         >
        //           Vehicle color
        //         </Typography>

        //         <FormControl
        //           fullWidth
        //           size='small'
        //           sx={{
        //             background: "#F0F0F0",
        //           }}
        //         >
        //           <InputLabel
        //             sx={{
        //               color: "#092C4C",
        //               fontSize: "16px !important",
        //               fontWeight: 400,
        //             }}
        //           >
        //             Red
        //           </InputLabel>
        //           <Select
        //             sx={{
        //               fontSize: "16px !important",
        //               fontWeight: 400,
        //             }}
        //             value={sinoki}
        //             label='2016'
        //             onChange={handleChange}
        //           >
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki"}>
        //               Sinoki
        //             </MenuItem>
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki 2"}>
        //               Sinoki 2
        //             </MenuItem>
        //             <MenuItem sx={{ fontSize: "16px !important", py: 0 }} value={"Sinoki 3"}>
        //               Sinoki 3
        //             </MenuItem>
        //           </Select>
        //         </FormControl>
        //       </Box>
        //     </Stack>

        //     {/* Continue button */}
        //     <Stack
        //       sx={{
        //         width: "100%",
        //         alignItems: "center",
        //         mt: { xs: 6, sm: 8, md: 10 },
        //         mb: { xs: 20, md: 25 },
        //       }}
        //     >
        //       <Button
        //         onClick={() => handleNext()}
        //         variant='contained'
        //         disableElevation
        //         sx={{
        //           width: { xs: "90%", sm: "75%", md: "62%" },
        //           fontSize: "20px",
        //           fontWeight: "700",
        //           lineHeight: "28px",
        //           textTransform: "none",
        //           padding: "16px 0",
        //         }}
        //       >
        //         Continue
        //       </Button>
        //     </Stack>
        //   </Container>
        // ) :
        activeStep === 1 ? (
          // Private & licensing step section
          <Container>
            {/* Main text */}
            <Container
              sx={{
                width: { xs: "100%", sm: "85%", md: "69%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mt: { xs: 8, sm: 12, md: 16 },
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
                Private & licensing Information
              </Typography>

              <Typography
                variant='p'
                color={"#092C4C"}
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  width: { md: "75%" },
                  textAlign: { xs: "left", sm: "center" },
                }}
              >
                We keep your national identification and license information private.
              </Typography>
            </Container>

            {/* Input field */}
            <Stack
              spacing={{ xs: 2, md: 4 }}
              sx={{ mt: { xs: 6, sm: 9, md: 12 }, width: "100%", alignItems: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.8,
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  Driver's license or JTB form number
                </Typography>

                <TextField
                  hiddenLabel
                  defaultValue='e.g BUS123ZY'
                  InputProps={{
                    style: {
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#092C4C",
                      border: "1px solid #092C4C",
                    },
                  }}
                  variant='outlined'
                />

                <Typography
                  variant='p'
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#828282",
                    lineHeight: "28px",
                  }}
                >
                  License number on your driver's document
                </Typography>
              </Box>
            </Stack>

            {/* Continue button */}
            <Stack
              sx={{
                width: "100%",
                alignItems: "center",
                mt: { xs: 8, sm: 10, md: 12 },
                mb: { xs: 20, md: 25 },
              }}
            >
              <Button
                onClick={() => handleNext()}
                variant='contained'
                disableElevation
                sx={{
                  width: { xs: "90%", sm: "75%", md: "62%" },
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  textTransform: "none",
                  padding: "16px 0",
                }}
              >
                Continue
              </Button>
            </Stack>
          </Container>
        ) : activeStep === 2 ? (
          // Documents step section
          <Container>
            {/* Main text */}
            <Container
              sx={{
                width: { xs: "100%", sm: "85%", md: "69%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mt: { xs: 8, sm: 12, md: 16 },
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
                Documents
              </Typography>

              <Typography
                variant='p'
                color={"#092C4C"}
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  textAlign: { xs: "left", sm: "center" },
                }}
              >
                We must request certain documents from you as part of the sign-up process for
                becoming a Fleet Owner, in accordance with legal requirements.
              </Typography>
            </Container>

            {/* Input fields */}
            <Stack
              spacing={{ xs: 4, md: 6 }}
              sx={{ mt: { xs: 6, sm: 9, md: 12 }, width: "100%", alignItems: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant='p' gutterBottom>
                    Driver's License
                  </Typography>

                  <Typography variant='p' gutterBottom sx={{ fontSize: "14px", color: "#EB5757" }}>
                    Required*
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    padding: "5px 5px 5px 20px",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      display: "inline-block",
                      color: "#828282",
                      fontSize: "13.596px",
                    }}
                  >
                    Select File
                  </label>
                  <input type='file' id='file' name='file' />
                  <button id='btn1'>Browse</button>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant='p' gutterBottom>
                    DSpatcher's profile photo
                  </Typography>

                  <Typography variant='p' gutterBottom sx={{ fontSize: "14px", color: "#EB5757" }}>
                    Required*
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    padding: "5px 5px 5px 20px",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      display: "inline-block",
                      color: "#828282",
                      fontSize: "13.596px",
                    }}
                  >
                    Select File
                  </label>
                  <input type='file' id='file' name='file' />
                  <button id='btn1'>Browse</button>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Typography variant='p' gutterBottom>
                  Front of the Vehicle
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      color: "#FFF",
                      background: "#092C4C",
                      borderRadius: "3px 0px 0px 3px",
                      width: "212.435px",
                      height: "47.875px",
                      alignItems: "center",
                      display: "flex",
                      gap: "6px",
                      paddingLeft: 20,
                    }}
                  >
                    <img src={FileFill} alt='File icon' />
                    <Typography
                      variant='p'
                      sx={{
                        fontSize: "13.596px",
                        fontWeight: 700,
                        lineHeight: "19.034px",
                      }}
                    >
                      Sample.jpg
                    </Typography>
                  </label>
                  <input type='file' id='file' name='file' />
                  <Done
                    sx={{
                      background: "#092C4C",
                      color: "#fff",
                      display: "flex",
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3px",
                      width: "27.192px",
                      height: "27.192px",
                      marginRight: { xs: "20px", md: "35px" },
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Typography variant='p' gutterBottom>
                  Back of the Vehicle
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      color: "#FFF",
                      background: "#092C4C",
                      borderRadius: "3px 0px 0px 3px",
                      width: "212.435px",
                      height: "47.875px",
                      alignItems: "center",
                      display: "flex",
                      gap: "6px",
                      paddingLeft: 20,
                    }}
                  >
                    <img src={FileFill} alt='File icon' />
                    <Typography
                      variant='p'
                      sx={{
                        fontSize: "13.596px",
                        fontWeight: 700,
                        lineHeight: "19.034px",
                      }}
                    >
                      Sample.jpg
                    </Typography>
                  </label>
                  <input type='file' id='file' name='file' />
                  <Done
                    sx={{
                      background: "#092C4C",
                      color: "#fff",
                      display: "flex",
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3px",
                      width: "27.192px",
                      height: "27.192px",
                      marginRight: { xs: "20px", md: "35px" },
                    }}
                  />
                </Box>
              </Box>

              <Stack
                spacing={1.2}
                sx={{
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.7,
                  }}
                  elevation={0}
                >
                  <Typography
                    variant='p'
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#092C4C",
                    }}
                  >
                    Vehicle license
                  </Typography>
                </Card>

                <Box
                  sx={{
                    position: "relative",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      color: "#092C4C",
                      width: "212.435px",
                      height: "47.875px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      paddingLeft: 20,
                    }}
                  >
                    <img src={FileFillDark} alt='File icon' />
                    <Typography
                      variant='p'
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "22.4px",
                      }}
                    >
                      Sample.jpg
                    </Typography>
                  </label>
                  <input type='file' id='file' name='file' />
                  <Done
                    sx={{
                      background: "#092C4C",
                      color: "#fff",
                      display: "flex",
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3px",
                      width: "27.192px",
                      height: "27.192px",
                      marginRight: { xs: "20px", md: "35px" },
                    }}
                  />
                </Box>
              </Stack>

              <Stack
                spacing={1.2}
                sx={{
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.2,
                  }}
                  elevation={0}
                >
                  <Typography
                    variant='p'
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#092C4C",
                    }}
                  >
                    LASRRA card
                  </Typography>
                  <Typography
                    variant='p'
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#092C4C",
                    }}
                  >
                    Resident Card issued by the Lagos State Resident Registration Agency
                  </Typography>
                  <Typography
                    variant='p'
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#092C4C",
                    }}
                  >
                    Visit{" "}
                    <Link to='' style={{ color: "#EB5757" }}>
                      Lagos State Resident Registration Agency
                    </Link>
                  </Typography>
                </Card>

                <Box
                  sx={{
                    position: "relative",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      color: "#092C4C",
                      width: "212.435px",
                      height: "47.875px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      paddingLeft: 20,
                    }}
                  >
                    <img src={FileFillDark} alt='File icon' />
                    <Typography
                      variant='p'
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "22.4px",
                      }}
                    >
                      Sample.jpg
                    </Typography>
                  </label>
                  <input type='file' id='file' name='file' />
                  <Done
                    sx={{
                      background: "#092C4C",
                      color: "#fff",
                      display: "flex",
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3px",
                      width: "27.192px",
                      height: "27.192px",
                      marginRight: { xs: "20px", md: "35px" },
                    }}
                  />
                </Box>
              </Stack>

              <Stack
                spacing={1.2}
                sx={{
                  width: { xs: "90%", sm: "75%", md: "62%" },
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.2,
                  }}
                  elevation={0}
                >
                  <Typography
                    variant='p'
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#092C4C",
                    }}
                  >
                    LASDRI card
                  </Typography>
                  <Typography
                    variant='p'
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#092C4C",
                    }}
                  >
                    Lagos Drivers institute ReCertification Card Visit{" "}
                    <Link to='' style={{ color: "#EB5757" }}>
                      Lagos State Drivers Institute
                    </Link>
                  </Typography>
                </Card>

                <Box
                  sx={{
                    position: "relative",
                    border: "0.85px solid #BDBDBD",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor='file'
                    style={{
                      color: "#092C4C",
                      width: "212.435px",
                      height: "47.875px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      paddingLeft: 20,
                    }}
                  >
                    <img src={FileFillDark} alt='File icon' />
                    <Typography
                      variant='p'
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "22.4px",
                      }}
                    >
                      Sample.jpg
                    </Typography>
                  </label>
                  <input type='file' id='file' name='file' />
                  <Done
                    sx={{
                      background: "#092C4C",
                      color: "#fff",
                      display: "flex",
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3px",
                      width: "27.192px",
                      height: "27.192px",
                      marginRight: { xs: "20px", md: "35px" },
                    }}
                  />
                </Box>
              </Stack>
            </Stack>

            {/* Continue button */}
            <Stack
              sx={{
                width: "100%",
                alignItems: "center",
                mt: { xs: 6, sm: 8, md: 10 },
                mb: { xs: 20, md: 25 },
              }}
            >
              <Button
                onClick={() => handleNext()}
                variant='contained'
                disableElevation
                sx={{
                  width: { xs: "90%", sm: "75%", md: "62%" },
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  textTransform: "none",
                  padding: "16px 0",
                }}
              >
                Continue
              </Button>
            </Stack>
          </Container>
        ) : activeStep === 3 || activeStep === 4 ? (
          // Payment step section
          <Container>
            {/* Main text */}
            <Container
              sx={{
                width: { xs: "100%", sm: "85%", md: "69%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mt: { xs: 8, sm: 12, md: 16 },
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
                Payment Details
              </Typography>

              <Typography
                variant='p'
                color={"#092C4C"}
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                We must request certain documents from you as part of the sign-up process for
                becoming a Fleet Owner, in accordance with legal requirements.
              </Typography>
            </Container>

            {/* Continue button */}
            <Stack
              sx={{
                width: "100%",
                alignItems: "center",
                mt: { xs: 50, sm: 75, md: 90 },
                mb: { xs: 20, md: 25 },
              }}
            >
              <Button
                onClick={() => {
                  if (activeStep !== steps.length) {
                    handleNext();
                  }
                }}
                variant='contained'
                disableElevation
                sx={{
                  width: { xs: "90%", sm: "75%", md: "62%" },
                  marginBlock: "50px",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  textTransform: "none",
                  padding: "16px 0",
                }}
              >
                Continue
              </Button>
            </Stack>
          </Container>
        ) : null
      }
    </ThemeProvider>
  );
};

export default RiderSignUp;
