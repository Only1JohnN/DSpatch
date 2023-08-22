import { useState } from "react";
import { Button, Card, CircularProgress, Stack, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import TextInput from "../../../components/input";
import Checkbox from "../../../components/CheckBox";
import "./styles.css";

// Material imports
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../../assets/theme";
import {
  FooterLogo,
  LineDesign,
  DspatchWhiteLogo,
  WhatsAppLogo,
  FleetDesign,
  FileFill,
  FileFillDark,
} from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import SelectInput from "../../../components/SelectInput";
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
  numberOfFleet: Yup.string().required("Number of fleet is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  }),
});

const steps = ["Personal Information", "Documents", "Payment Details"];

const FleetOwnersSignUp = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  // const [closeModal, setCloseModal] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    numberOfFleet: "",
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
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 1510);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <ThemeProvider theme={theme}>
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
                // height: "100%",
                height: "992px",
                backgroundColor: "#ffff",
                backgroundImage: `url(${FleetDesign})`,
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
                    // textAlign: "center",
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
                  “Deliver Products to Customers and make your own pay”
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
                  Sign up as a DSpatcher
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
                Fleet Owners:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // maxWidth: "37rem",
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
                  If you like to add{" "}
                  <span
                    styles={{
                      fontWeight: "800",
                    }}
                  >
                    multiple vehicles
                  </span>{" "}
                  to DSpatch platform, please register here or riders,{" "}
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to='/sign-up-rider'
                  >
                    <span style={{ color: "#F2994A" }}>sign up as a DSpatcher</span>
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
                        label='Full Name or Business Name'
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
                      <SelectInput
                        {...formik.getFieldProps("numberOfFleet")}
                        label='Vehicles in your fleet'
                      >
                        <option value='' disabled>
                          4
                        </option>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three'>3</option>
                        <option value='four'>4</option>
                        <option value='five'>5</option>
                      </SelectInput>
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        {formik.touched.numberOfFleet && formik.errors.numberOfFleet && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                            }}
                          >
                            <span style={{ color: "red" }}>{formik.errors.numberOfFleet}</span>
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
                        // lineHeight: "28px",
                        color: "#092C4C",
                        marginBottom: ".5rem",
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

      {/* Page stepper */}
      <Container
        sx={{
          mt: 15,
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<IteratorConnector />}
          sx={{
            width: { xs: "100%", sm: "89%", md: "79%" },
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

      {activeStep === 1 ? (
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
              We must request certain documents from you as part of the sign-up process for becoming
              a Fleet Owner, in accordance with legal requirements.
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
              <Typography variant='p' gutterBottom>
                Image of Vehicle 1
              </Typography>

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
                Image of Vehicle 2
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
                width: { xs: "90%", sm: "75%", md: "62%" },
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                variant='contained'
                sx={{
                  textTransform: "none",
                  padding: "11.503px 28.337px 11.497px 26.663px",
                  borderRadius: "3.399px",
                  fontSize: "11.896px",
                  fontWeight: 700,
                  lineHeight: "16.655px",
                  background: "#092C4C",
                }}
                disableElevation
              >
                Add Vehicle
              </Button>
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
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#092C4C",
                  }}
                >
                  Nipost License or CAC Registration
                </Typography>
                <Typography
                  variant='p'
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#092C4C",
                  }}
                >
                  Upload one of the two documents here
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
      ) : (
        // Payment Details step section
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
              We must request certain documents from you as part of the sign-up process for becoming
              a Fleet Owner, in accordance with legal requirements.
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
      )}
    </ThemeProvider>
  );
};

export default FleetOwnersSignUp;
