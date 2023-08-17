import React from "react";

// Material imports
import { Button as MUIbtn } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = styled(MUIbtn)({
  borderRadius: "3px",
  backgroundColor: "#092C4C",
  color: "#ffffff",
  padding: "16px 80px",
  textTransform: "none",
  fontsize: "16px",
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ].join(","),

  "&:hover": {
    backgroundColor: "#05182A",
  },

  "&.MuiButton-outlined": {
    color: "#092C4C",
    backgroundColor: "#00000000",
    border: "2px solid #092C4C",
    paddingTop: "12.6px",
    paddingBottom: "12.6px",

    "&.MuiButton-outlined:hover": {
      backgroundColor: "#092C4C4D",
    },
  },
});

export default Button;
