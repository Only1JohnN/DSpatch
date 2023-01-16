import React, { useState } from "react";

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
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

// React-Router-Dom
// import { Link } from 'react-router-dom';

// Assets
import theme from "../../assets/theme";
import {
  // AbuLogo,
  // ShowIcon,
  // HideIcon,
  // TopSemiColon,
  // BottomSemiColon,
  // Ellipse,
  GirlImage,
  SwaggerImage,
  ManImage,
  FirstImage,
  ConferenceImage,
  Group,
  PatternGroup,
} from "../../assets";

import { ReactComponent as Ellipse } from "../../assets/svgs/Ellipse.svg";
import { ReactComponent as TopSemiColon } from "../../assets/svgs/semicolon_t.svg";
import { ReactComponent as BottomSemiColon } from "../../assets/svgs/semicolon_b.svg";
import { ReactComponent as ShowIcon } from "../../assets/svgs/show_icon.svg";
import { ReactComponent as HideIcon } from "../../assets/svgs/hide_icon.svg";
import { ReactComponent as Logo } from "../../assets/svgs/dspatch_logo-abu.svg";

import { Button } from "../../components";

import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();
  const [showMission, setShowMission] = useState(false);

  const handleShow = () => {
    setShowMission(!showMission);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component='main' className={classes.wrapper}>
        <Box className={classes.miniJumbo}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, .5)",
              backgroundImage: `url(${FirstImage})`,
              minHeight: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Container
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "555px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Grid container direction={{ xs: "column", md: "row" }}> */}
              {/* <Grid> */}
              <Typography
                variant='h4'
                sx={{
                  fontWeight: "700",
                  fontSize: "56px",
                  lineHeight: "62px",
                  color: "#FFFFFF",
                }}
              >
                About
              </Typography>
              <Typography variant='subtitleAbout'>
                DSpatch is a technology startup in Nigeria, Africa's largest economy, with the
                potential to become one of Africa's most significant firms.
              </Typography>
              {/* </Grid> */}
              {/* </Grid> */}
            </Container>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: "0",
                bottom: "7rem",
                backgroundColor: "#E0E0E0",
                borderRadius: "50px 0px 0px 50px",
                padding: "15px 0px",
                width: "544px",
              }}
            >
              <Logo
                style={{
                  marginBottom: "5px",
                }}
              />
              <Typography variant='subtitle2' color='#092C4C'>
                Drive Safe. Deliver Fast...
              </Typography>
            </Box>
          </Box>
        </Box>
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
            <Grid container direction={{ xs: "column", md: "column" }} columnSpacing={{ md: 6 }}>
              <Grid
                xs
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 4rem",
                }}
              >
                <Typography variant='subtitle2' mb={{ xs: 0, md: 0 }} color='#092C4C'>
                  Read our full mission statement
                </Typography>
                <Box
                  onClick={handleShow}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {showMission ? <HideIcon /> : <ShowIcon />}
                </Box>
              </Grid>

              {showMission && (
                <Grid
                  xs
                  sx={{
                    borderBottom: "1px solid #092C4C",
                    marginTop: "2rem",
                  }}
                >
                  <Typography variant='subtitle2' mb={{ xs: 4, md: 4 }} color='#092C4C'>
                    Lorem ipsum dolor sit amet consectetur. Neque duis ac vel nulla condimentum nec
                    facilisis vulputate ac. Rhoncus urna elementum et arcu sem viverra tellus
                    sagittis bibendum. Parturient eget ac tristique sollicitudin tempor imperdiet
                    aliquam id risus. Adipiscing nibh feugiat velit cursus turpis amet purus
                    vulputate egestas. Diam venenatis sem mi tortor sed lacus habitasse sed.
                    Tincidunt justo sit aliquam quam quis neque amet quis. Nullam habitant posuere
                    volutpat mi turpis habitasse mauris luctus. Eget non et eget urna ultrices
                    ornare malesuada varius. Commodo orci ipsum nunc lorem sit integer et
                    ullamcorper cursus. Rhoncus quis at dui nulla libero molestie.
                  </Typography>
                  <Typography variant='subtitle2' mb={{ xs: 4, md: 4 }} color='#092C4C'>
                    Et platea lacus mattis feugiat sed diam est viverra. Maecenas quis a vitae quis
                    et lobortis tincidunt hendrerit. Fusce euismod mi purus non sit. Porttitor
                    turpis non bibendum lacus purus porttitor fames. Netus in viverra phasellus
                    habitasse arcu non ac condimentum purus. Ullamcorper malesuada ornare aliquam
                    sit vulputate eu. Vitae nunc montes cursus adipiscing cursus lorem tellus
                    praesent. Nunc malesuada id imperdiet interdum. Arcu lectus vitae est at.
                    posuere lacus sit.
                  </Typography>
                  <Typography variant='subtitle2' mb={{ xs: 4, md: 4 }} color='#092C4C'>
                    Diam sed eu elementum faucibus condimentum blandit. At arcu purus nibh morbi
                    eget duis adipiscing turpis. Potenti vestibulum tellus amet odio maecenas in
                    fusce aliquam. Facilisis laoreet in amet elit dignissim pellentesque aliquam
                    lorem varius. Ullamcorper arcu ornare egestas maecenas praesent tortor mattis
                    orci neque. Felis magna cursus sed feugiat. Posuere integer eu amet sapien nulla
                    mattis sit quis malesuada. Vitae euismod in odio id vitae pellentesque nibh
                    egestas id. Ornare amet id ut tempor eget. Nec leo posuere lacus sit.
                  </Typography>
                </Grid>
              )}
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
                  Who we are!
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 4, md: 0 }} color='#092C4C'>
                  We are DSpatch, a platform where pilots and customers meet to ensure packages are
                  being transported safe and fast to any destination in Nigeria.
                </Typography>
              </Grid>

              <Grid xs>
                <Box
                  className={classes.placeholders}
                  sx={{
                    backgroundImage: `url(${ConferenceImage})`,
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                ></Box>
              </Grid>
            </Grid>

            <Grid
              container
              direction={{ xs: "column-reverse", md: "row" }}
              columnSpacing={{ md: 6 }}
            >
              <Grid xs>
                <Box
                  className={classes.placeholders}
                  sx={{
                    backgroundImage: `url(${ManImage})`,
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                ></Box>
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
                  What do we do?
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                  We make things easy for you. Do you need to transport something across Lagos?
                  Simply DSpatch it! Are you hungry? Simply DSpatch it!
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
                  Who are we looking for?
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                  Experience is crucial, but we are more interested in drive, intellect, and ethics.
                  People who work hard, learn rapidly, and care about those around them, in other
                  words. We focus on what each individual can become rather than what they have done
                  in the past. Trusted Pilots to deliver packages to any destination of customers’
                  choice with that DSpatch's guarantee you can trust.
                </Typography>
              </Grid>

              <Grid
                xs
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  className={classes.miniplaceholders}
                  sx={{
                    backgroundImage: `url(${Group})`,
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                    marginRight: "2rem",
                  }}
                ></Box>
                <Box
                  className={classes.miniplaceholders}
                  sx={{
                    backgroundImage: `url(${SwaggerImage})`,
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                ></Box>
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
              ></Grid>

              <Grid xs>
                <Box
                  className={classes.placeholders}
                  sx={{
                    backgroundImage: `url(${GirlImage})`,
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
        <Box
          className={classes.miniJumbo}
          sx={{
            borderBottom: "1px solid #828282",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${PatternGroup})`,
              minHeight: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              margin: "15rem 0",
            }}
          >
            <Container
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Typography
                variant='subtitle2'
                sx={{
                  fontWeight: "600",
                  fontSize: "32px",
                  lineHeight: "40px",
                  textAlign: "center",
                  color: "#092C4C",
                }}
              >
                We have only just begun!
                <br /> We continue to become <span style={{ color: "#F2994A" }}>larger</span>,
                <span style={{ color: "#F2994A" }}>better</span>, and
                <br /> <span style={{ color: "#F2994A" }}>stronger</span> because we feel the future
                is
                <br /> bright enough for us.
              </Typography>
              <TopSemiColon
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                }}
              />
              <BottomSemiColon
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              />
            </Container>
            <Ellipse
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
