import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  Dialog as MUIDialog,
  DialogTitle,
  List,
  ListItem,
  Slide,
  IconButton,
  ThemeProvider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Assets
import theme from "../../assets/theme";

// React-Router-Dom
import { Link as RouterLink } from "react-router-dom";
import { Button } from "../../components";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function CustomDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        pb: 3,
        px: 0,
        color: "rgba(15, 17, 65, 0.7)",
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "22.4px",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "3%",
            top: "3%",
            color: "#0F1141",
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const SignUpModal = () => {
  const { signUpModal, setSignUpModal } = useContext(AppContext);

  const handleOpen = () => {
    setSignUpModal(!signUpModal);
  };

  return (
    <ThemeProvider theme={theme}>
      <MUIDialog
        open={signUpModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOpen}
        aria-describedby='alert-dialog-slide-description'
        sx={{
          backdropFilter: "blur(5px)",

          "& .MuiDialog-paper": {
            py: { xs: 7, md: "88px" },
            px: { xs: 2, md: "40px" },
            minWidth: "80vw",
            // height: "50vh",
            justifyContent: "center",
          },
        }}
        fullWidth
      >
        <CustomDialogTitle onClose={handleOpen}>Select Among the following</CustomDialogTitle>

        <List sx={{ pt: 0, color: "#092C4C" }}>
          <ListItem disableGutters>
            <Button
              sx={{
                fontSize: { md: "22px" },
                fontWeight: "400",
                lineHeight: { md: "22.4px" },
                borderColor: "#0F1141",
                width: "100%",
                justifyContent: "space-between",
                px: { xs: "24px", md: "48px" },
                py: { md: "25px !important" },
                mb: "20px",

                "$:hover": {
                  backgroundColor: "#CEDFDB",
                },
              }}
              variant='outlined'
              component={RouterLink}
              to='customer/'
              onClick={() => handleOpen()}
              endIcon={<ArrowRightIcon sx={{ fontSize: "30px !important" }} />}
            >
              Sign up as a Customer
            </Button>
          </ListItem>

          <ListItem disableGutters>
            <Button
              sx={{
                fontSize: { md: "22px" },
                fontWeight: "400",
                lineHeight: { md: "22.4px" },
                borderColor: "#0F1141",
                width: "100%",
                justifyContent: "space-between",
                px: { xs: "24px", md: "48px" },
                py: { md: "25px !important" },
                mb: "20px",

                "$:hover": {
                  backgroundColor: "#CEDFDB",
                },
              }}
              variant='outlined'
              component={RouterLink}
              to='fleet-owner/'
              onClick={() => handleOpen()}
              endIcon={<ArrowRightIcon sx={{ fontSize: "30px !important" }} />}
            >
              Sign up as a Fleet Owner
            </Button>
          </ListItem>

          <ListItem disableGutters>
            <Button
              sx={{
                fontSize: { md: "22px" },
                fontWeight: "400",
                lineHeight: { md: "22.4px" },
                borderColor: "#0F1141",
                width: "100%",
                justifyContent: "space-between",
                px: { xs: "24px", md: "48px" },
                py: { md: "25px !important" },

                "$:hover": {
                  backgroundColor: "#CEDFDB",
                },
              }}
              variant='outlined'
              component={RouterLink}
              to='courier/'
              onClick={() => handleOpen()}
              endIcon={<ArrowRightIcon sx={{ fontSize: "30px !important" }} />}
            >
              Sign up as a DSpatcher
            </Button>
          </ListItem>
        </List>
      </MUIDialog>
    </ThemeProvider>
  );
};

export default SignUpModal;
