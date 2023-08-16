import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  Dialog as MUIDialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
        p: 2,
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
    <div>
      <MUIDialog
        open={signUpModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOpen}
        aria-describedby='alert-dialog-slide-description'
        sx={{
          backdropFilter: "blur(5px)",

          "& .MuiDialog-paper": {
            py: 4,
            px: 3,
            minWidth: "80vw",
            height: "50vh",
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
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "#092C4C",
                fontSize: "13px",
                borderRadius: "3px",
                border: "1.5px",
                width: "100%",
                justifyContent: "space-between",
                px: 8,
                py: 2.5,

                "$:hover": {
                  backgroundColor: "#CEDFDB",
                },
              }}
              component={RouterLink}
              to='customer/'
              onClick={() => handleOpen()}
              endIcon={<ArrowRightIcon sx={{ fontSize: 40 }} />}
            >
              Sign up as a Customer
            </Button>
          </ListItem>

          <ListItem disableGutters>
            <Button
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "#092C4C",
                fontSize: "13px",
                borderRadius: "3px",
                border: "1.5px",
                width: "100%",
                justifyContent: "space-between",
                px: 8,
                py: 2.5,

                "$:hover": {
                  backgroundColor: "#CEDFDB",
                },
              }}
              component={RouterLink}
              to='fleet-owner/'
              onClick={() => handleOpen()}
              endIcon={<ArrowRightIcon sx={{ fontSize: 40 }} />}
            >
              Sign up as a Fleet Owner"
            </Button>
          </ListItem>

          <ListItem disableGutters>
            <Button
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "#092C4C",
                fontSize: "13px",
                borderRadius: "3px",
                border: "1.5px",
                width: "100%",
                justifyContent: "space-between",
                px: 8,
                py: 2.5,

                "$:hover": {
                  backgroundColor: "#CEDFDB",
                },
              }}
              component={RouterLink}
              to='courier/'
              onClick={() => handleOpen()}
              endIcon={<ArrowRightIcon sx={{ fontSize: 40 }} />}
            >
              Sign up as a DSpatcher"
            </Button>
          </ListItem>
        </List>
      </MUIDialog>
    </div>
  );
};

export default SignUpModal;
