import { Done } from "@mui/icons-material";
import { StepConnector, stepConnectorClasses, styled } from "@mui/material";
import React from "react";

export const IteratorConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 16,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#092C4C",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "#092C4C",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: "8px",
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#E0E0E0",
    borderRadius: 1,
  },
}));

const IteratorIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#fff",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  border: "3px solid #E0E0E0",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#fff",
    border: "3px solid #092C4C",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#092C4C",
    border: "3px solid #092C4C",
  }),
}));

function IteratorIcon(props) {
  const { active, completed, className } = props;

  return (
    <IteratorIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <Done /> : null}
    </IteratorIconRoot>
  );
}

export default IteratorIcon;
